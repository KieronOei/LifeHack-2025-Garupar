function getLearnMoreURL(companyName, callback) {
  // Reference the 'fashionRetailers' node
  const ref = firebase.database().ref('fashionRetailers');
  
  // Fetch all retailers under 'fashionRetailers'
  ref.once('value', (snapshot) => {
    let foundURL = null;
    snapshot.forEach(childSnapshot => {
      const data = childSnapshot.val();
      // Case-insensitive comparison for brand name
      if (data.brandURL === companyName) {
        foundURL = data.learnMore.link;
      }
    });
    callback(foundURL); // Will be null if not found
  });
}
