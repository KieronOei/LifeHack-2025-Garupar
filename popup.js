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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Retrieve current tab's URL 
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const url = tabs[0].url;
  // Extract the domain or company name from the URL, e.g., "komodo"
  console.log("Current tab URL:", url);
});

// Process the URL to extract company name
function extractCompanyName(url) {
  try {
    const domain = (new URL(url)).hostname.replace(/^www\./, '');
    // Example: "komodo.uk.com" -> "komodo"
    const company = domain.split('.')[0];
    return company;
  } catch (e) {
    return null;
  }
}

// Usage:
const companyName = extractCompanyName(url); 
console.log("Company name:", companyName);



// On-start
document.addEventListener('DOMContentLoaded', function() {
  progressCircle({ targetPercent: 65, size: 80, containerId: 'circle-main' });
  progressCircle({ targetPercent: 95, size: 50, containerId: 'circle-pdt1' });
  progressCircle({ targetPercent: 85, size: 50, containerId: 'circle-pdt2' });
  progressCircle({ targetPercent: 75, size: 50, containerId: 'circle-pdt3' });

});
