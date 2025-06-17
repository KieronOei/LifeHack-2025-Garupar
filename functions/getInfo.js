async function getInfo(url) {
  const brandURL = getCompanyName(url); // Returns the brandURL from the URL
  if (!brandURL) return [null, null, null];

  try {
    const snapshot = await firebase.database().ref('fashionRetailers')
      .orderByChild('brandURL')
      .equalTo(brandURL)
      .once('value');

    if (snapshot.exists()) {
      // There might be only one match, so get the first child
      let data = null;
      snapshot.forEach(child => {
        data = child.val();
      });
      const brandName = data?.brandName || null;
      const gsgethicalscore = data?.gsEthicalScore !== undefined ? data.gsEthicalScore : (data?.gsgEthicalScore !== undefined ? data.gsgEthicalScore : null);
      const learnMoreLink = data?.learnMore?.link || null;
      return [brandName, gsgethicalscore, learnMoreLink];
    } else {
      return [null, null, null];
    }
  } catch (err) {
    console.error("Error fetching brand info:", err);
    return [null, null, null];
  }
}

