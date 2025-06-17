document.addEventListener('DOMContentLoaded', function() {
    const reviewsView = document.getElementById('main');
    const feedbackView = document.getElementById('main2');
    const goFeedbackBtn = document.getElementById('feedback');
    const goReviewsBtn = document.getElementById('home');

    goFeedbackBtn.addEventListener('click', function() {
      reviewsView.style.display = 'none';
      feedbackView.style.display = 'flex';

      // For review form submission

      document.getElementById('reviewForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get form values
      const reviewerName = document.getElementById('reviewerName').value;
      const reviewComment = document.getElementById('reviewComment').value;
      const brandId = document.getElementById('reviewBrand').value;

      // Get star ratings (assuming starAnimation.js exposes ratingValues)
      const productRating = window.ratingValues ? window.ratingValues['starRatingProduct'] : 0;
      const sustainabilityRating = window.ratingValues ? window.ratingValues['starRatingSustainability'] : 0;
      // Note: If your sustainability container is named 'starRatingSustainability', use that

      // Push review to Firebase
      const reviewsRef = firebase.database().ref('reviews');
      reviewsRef.push({
        brandId: brandId,
        reviewerName: reviewerName,
        comment: reviewComment,
        productRating: productRating,
        sustainabilityRating: sustainabilityRating,
        timestamp: firebase.database.ServerValue.TIMESTAMP
        }).then(() => {
          document.getElementById('reviewMessage').textContent = "Review submitted!";
        }).catch(error => {
          document.getElementById('reviewMessage').textContent = "Error: " + error.message;
          });
      });

    });

    goReviewsBtn.addEventListener('click', function() {
      feedbackView.style.display = 'none';
      reviewsView.style.display = 'flex';
    });

    
});