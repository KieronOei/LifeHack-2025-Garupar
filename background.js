chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "reverse-image-search",
    title: "Reverse Image Search (AI)",
    contexts: ["image"] // Only show for images
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "reverse-image-search") {
    const apiUrl = 'https://20a8-151-192-222-231.ngrok-free.app/search_url';
    const imageUrl = info.srcUrl;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({image_url: imageUrl})
      });

      const data = await response.json();
      chrome.storage.local.set({ reverseImageResults: data.results }, () => {
      // Send a message to all extension views (including popup)
        chrome.runtime.sendMessage({ type: 'REVERSE_RESULTS_READY' });
      });
      console.log("Results received:", data);
      chrome.storage.local.set({ reverseImageResults: data.results });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Unknown error");
      }

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
