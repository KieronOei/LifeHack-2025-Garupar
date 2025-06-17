document.addEventListener('DOMContentLoaded', function() {
    const reviewsView = document.getElementById('main');
    const feedbackView = document.getElementById('main2');
    const thankyouView = document.getElementById('main3');
    const goFeedbackBtn = document.getElementById('feedback');
    const goReviewsBtn = document.getElementById('home');
    const thankyouBtn = document.getElementById('thankyou');

    goFeedbackBtn.addEventListener('click', function() {
      reviewsView.style.display = 'none';
      feedbackView.style.display = 'flex';

      // Remove active-tab from home & add active-tab to feedback
      document.getElementById('home').classList.remove('active-tab');
      document.getElementById('feedback').classList.add('active-tab');

      // For review form submission

      // Checking form for validity
      function checkFormValidity() {
        const name = document.getElementById('reviewerName').value.trim();
        const brand = document.getElementById('reviewBrand').value.trim();
        const comment = document.getElementById('reviewComment').value.trim();
        const productRating = window.ratingValues ? window.ratingValues['starRatingProduct'] : 0;
        const sustainabilityRating = window.ratingValues ? window.ratingValues['starRatingSustainability'] : 0;
        const submitBtn = document.getElementById('submitReviewBtn');

        if (name && brand && comment && productRating > 0 && sustainabilityRating > 0) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
      }

      // Listen for input changes
      ['reviewerName', 'reviewBrand', 'reviewComment'].forEach(id => {
          document.getElementById(id).addEventListener('input', checkFormValidity);
      });

      // Listen for star rating changes
      document.querySelectorAll('.star-rating .star').forEach(star => {
          star.addEventListener('click', checkFormValidity);
      });


      // When submit button is pressed
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
          // document.getElementById('reviewMessage').textContent = "Review submitted!";
          feedbackView.style.display = 'none';
          thankyouView.style.display = 'flex';
        }).catch(error => {
          document.getElementById('reviewMessage').textContent = "Error: " + error.message;
          });
      });

    });

    goReviewsBtn.addEventListener('click', function() {
      feedbackView.style.display = 'none';
      reviewsView.style.display = 'flex';
      document.getElementById('reviewForm').reset();
      resetStarRatings();

      // Remove active-tab from feedback & add active-tab to home
      document.getElementById('feedback').classList.remove('active-tab');
      document.getElementById('home').classList.add('active-tab');
    });

    thankyouBtn.addEventListener('click', function() {
      feedbackView.style.display = 'flex';
      thankyouView.style.display = 'none';
      document.getElementById('reviewForm').reset();
      resetStarRatings();

      // Remove active-tab from home & add active-tab to feedback
      document.getElementById('home').classList.remove('active-tab');
      document.getElementById('feedback').classList.add('active-tab');
    });

    
});