import pandas as pd
import requests
from PIL import Image
from io import BytesIO
import torch
from transformers import CLIPProcessor, CLIPModel
from pinecone import Pinecone, ServerlessSpec
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware 
import numpy as np
import time
from fastapi import FastAPI, Request
from pydantic import BaseModel

# --- CONFIG ---
class ImageURLRequest(BaseModel):
    image_url: str
CLIP_MODEL_ID = "openai/clip-vit-base-patch16"
EMBED_DIM = 512  # for ViT-B/16

# --- INIT ---
app = FastAPI()
clip_model = CLIPModel.from_pretrained(CLIP_MODEL_ID)
clip_processor = CLIPProcessor.from_pretrained(CLIP_MODEL_ID)
# Create index if it doesn't exist
pc = Pinecone(api_key="pcsk_dYZvN_USudcoJhL6uKwDTae6fejru842tLtZPFUDZTL8RBwjAap6ugD8mRu4fz5XFNfUY")

# Create index if it doesn't exist
index_name = "developer-quickstart-py"

# Delete existing index if it exists
if pc.has_index(index_name):
    pc.delete_index(index_name)
    # Wait for deletion to complete
    while pc.has_index(index_name):
        print("Waiting for index deletion...")
        time.sleep(1)

if not pc.has_index(index_name):
    # Create new index
    pc.create_index(
        name=index_name,
        dimension=512,
        metric="cosine",
        spec=ServerlessSpec(cloud="aws", region="us-east-1")
    )

while True:
    try:
        status = pc.describe_index(index_name).status
        if status["ready"]:
            break
        print("Waiting for index initialization...")
        time.sleep(1)
    except Exception as e:
        print(f"Error checking index status: {e}")
        time.sleep(1)



# Connect to the index
index = pc.Index(index_name)

# --- UTILS ---
def get_image_embedding(image: Image.Image):
    inputs = clip_processor(images=image, return_tensors="pt")
    with torch.no_grad():
        embedding = clip_model.get_image_features(**inputs)
    return embedding[0].cpu().numpy().tolist()

def download_image(url):
    response = requests.get(url)
    return Image.open(BytesIO(response.content)).convert("RGB")

# --- 1. INGEST DATA ---
def ingest_csv(csv_path):
    df = pd.read_csv(csv_path, encoding="latin1")
    for i, row in df.iterrows():
        try:
            img = download_image(row['image_url'])
            emb = get_image_embedding(img)
            meta = {
                "title": row['title'],
                "product_url": row['product_url'],
                "image_url": row['image_url']
            }
            index.upsert([{"id": str(i), "values": emb, "metadata": meta}])
        except Exception as e:
            print(f"Error on row {i}: {e}")

# Uncomment to run ingestion once
ingest_csv("shirts.csv")
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev; restrict in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- 2. SEARCH ENDPOINT ---
@app.post("/search_url")
async def search_url(request: ImageURLRequest):
    try:
        # Add browser-like headers and adjust SSL verification
        headers = {
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/125.0.0.0 Safari/537.36"
            ),
            "Referer": "https://www.google.com/",
            "Accept-Language": "en-US,en;q=0.9",
        }
        response = requests.get(
            request.image_url,
            headers=headers,
            timeout=60,
            verify=False  # Disable SSL verification (for testing only)
        )
        response.raise_for_status()

        # Process the image
        img = Image.open(BytesIO(response.content)).convert("RGB")
        emb = get_image_embedding(img)
        results = index.query(vector=emb, top_k=5, include_metadata=True)
        items = [
            {
                "score": match["score"],
                "title": match["metadata"]["title"],
                "product_url": match["metadata"]["product_url"],
                "image_url": match["metadata"]["image_url"],
            }
            for match in results["matches"]
        ]
        return {"results": items}

    except requests.exceptions.SSLError as e:
        print(f"SSL Error: {e}")
        raise HTTPException(status_code=400, detail="SSL verification failed")
    except requests.exceptions.Timeout:
        raise HTTPException(status_code=504, detail="Image download timed out")
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=400, detail=str(e))
