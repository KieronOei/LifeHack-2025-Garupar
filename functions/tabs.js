document.addEventListener('DOMContentLoaded', function() {
    const reviewsView = document.getElementById('main');
    const feedbackView = document.getElementById('main2');
    const goFeedbackBtn = document.getElementById('feedback');
    const goReviewsBtn = document.getElementById('home');

    goFeedbackBtn.addEventListener('click', function() {
      reviewsView.style.display = 'none';
      feedbackView.style.display = 'flex';
    });

    goReviewsBtn.addEventListener('click', function() {
      feedbackView.style.display = 'none';
      reviewsView.style.display = 'flex';
    });
});