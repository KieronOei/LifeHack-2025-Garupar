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


// On-start
let url;
let companyName;
document.addEventListener('DOMContentLoaded', function() {
    
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
    progressCircle({ targetPercent: 95, size: 50, containerId: 'circle-pdt1' });
    progressCircle({ targetPercent: 85, size: 50, containerId: 'circle-pdt2' });
    progressCircle({ targetPercent: 75, size: 50, containerId: 'circle-pdt3' });

    

});


