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

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let arr1, arr2, arr3;
function updatePopupWithResults() {
  chrome.storage.local.get('reverseImageResults', function(data) {
    const results = data.reverseImageResults || [];
    if (results.length > 0) {
      const pdt1 = results[0];
      const pdt2 = results[1];
      const pdt3 = results[2];
      arr1 = [pdt1.image_url, pdt1.product_url];
      arr2 = [pdt2.image_url, pdt2.product_url];
      arr3 = [pdt3.image_url, pdt3.product_url];

      updateProduct(arr1, "pdt1");
      updateProduct(arr2, "pdt2");
      updateProduct(arr3, "pdt3");

    } else {
      document.getElementById('reverseResults').textContent = "No results found.";
    }
  });
}

// On-start
let url;
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
        document.getElementById('main-name').textContent = arr[0];
        progressCircle({ targetPercent: arr[1], size: 80, containerId: 'circle-main' });
        document.getElementById('currentLearnMore').href = arr[2];
      });
    });
});


