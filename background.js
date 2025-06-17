chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "reverse-image-search",
    title: "Reverse Image Search (AI)",
    contexts: ["image"] // Only show for images
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "reverse-image-search") {
    const apiUrl = 'http://192.168.1.17:8000/search_url';
    const imageUrl = info.srcUrl;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({image_url: imageUrl})
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Unknown error");
      }

      const data = await response.json();
      console.log("Results received:", data);

      // Display results in a new tab
      const html = `
        <html>
          <body>
            <h2>AI Reverse Image Search Results</h2>
            ${data.results.length ? data.results.map(item => `
              <div>
                <img src="${item.image_url}" width="100"/><br/>
                <b>${item.title}</b><br/>
                <a href="${item.product_url}" target="_blank">View Product</a><br/>
                Score: ${item.score.toFixed(3)}
              </div>
              <hr/>
            `).join('') : 'No results found.'}
          </body>
        </html>
      `;
      const url = "data:text/html;charset=utf-8," + encodeURIComponent(html);
      chrome.tabs.create({ url });
    } catch (err) {
      console.log('Error:', err);
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Search Failed',
        message: err.message || 'Failed to process image'
      });
    }
  }
});
