// Initialising firebase with config
const firebaseConfig = {
  apiKey: "AIzaSyBhWrjoWzkQ_2OeTeeooOFVFhvsg9VxrvI",
  authDomain: "lifehack-2025-garupar.firebaseapp.com",
  databaseURL: "https://lifehack-2025-garupar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lifehack-2025-garupar",
  storageBucket: "lifehack-2025-garupar.firebasestorage.app",
  messagingSenderId: "475969090658",
  appId: "1:475969090658:web:32ec73b88939dff9ee0d3b",
  measurementId: "G-HW9N3WV8R5"
};

function updatePopupWithResults() {
  chrome.storage.local.get('reverseImageResults', function(data) {
    const results = data.reverseImageResults || [];
    if (results.length > 0) {
      const pdt1 = results[0];
      const pdt2 = results[1];
      const pdt3 = results[2];
      const img1 = document.getElementById('1');
      const img2 = document.getElementById("2");
      const img3 = document.getElementById("3");
      img1.src = pdt1.image_url;
      img2.src = pdt2.image_url;
      img3.src = pdt3.image_url;
      // ...update other popup elements as needed...
    } else {
      document.getElementById('reverseResults').textContent = "No results found.";
    }
  });
}

// On-start
let url;
let companyName;
document.addEventListener('DOMContentLoaded', function() {
    updatePopupWithResults();

    // Listen for background message
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'REVERSE_RESULTS_READY') {
        updatePopupWithResults();
        console.log("updated");
      }
    });
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Retrieve brand URL
      url = tabs[0].url;
      
      //update main score
      getInfo(url).then(arr => {
        progressCircle({ targetPercent: arr[1], size: 80, containerId: 'circle-main' });
        document.getElementById('currentLearnMore').href = arr[2];
      });

      //update pdt 1

      
      getInfo(url).then(arr => {
        progressCircle({ targetPercent: arr[1], size: 80, containerId: 'circle-main' });
        document.getElementById('currentLearnMore').href = arr[2];
      });

    });
    
    
    //circles
    progressCircle({ targetPercent: 85, size: 50, containerId: 'circle-pdt2' });
    progressCircle({ targetPercent: 75, size: 50, containerId: 'circle-pdt3' });

    
    updateProduct(["/assets/icon128.png", "https://www.komodo.co.uk/collections/mens-knitwear/products/anton-organic-cotton-sweat-sand-melange"], "pdt1")
});


