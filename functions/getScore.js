function getScore(companyName, callback) {
  // Reference the 'fashionRetailers' node
  const ref = firebase.database().ref('fashionRetailers');
  
  // Fetch all retailers under 'fashionRetailers'
  ref.once('value', (snapshot) => {
    let foundScore = null;
    snapshot.forEach(childSnapshot => {
      const data = childSnapshot.val();
      // Case-insensitive comparison for brand name
      if (data.brandName && data.brandName.toLowerCase() === companyName.toLowerCase()) {
        foundScore = data.gsgEthicalScore;
      }
    });
    callback(foundScore); // Will be null if not found
  });
}
