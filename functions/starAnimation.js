// Initialise global variable
window.ratingValues = {}; 

document.addEventListener('DOMContentLoaded', function() {
  // Select all star rating containers
  const ratingContainers = document.querySelectorAll('.star-rating');

  ratingContainers.forEach((container) => {
    const stars = container.querySelectorAll('.star');
    const ratingValue = container.querySelector('.ratingValue');
    let selectedRating = 0;

    stars.forEach(star => {
      star.addEventListener('mouseover', function() {
        const val = parseInt(this.getAttribute('data-value'));
        highlightStars(val, stars);
      });
      star.addEventListener('mouseout', function() {
        highlightStars(selectedRating, stars);
      });
      star.addEventListener('click', function() {
        selectedRating = parseInt(this.getAttribute('data-value'));
        if (ratingValue) ratingValue.textContent = `Rating: ${selectedRating}`;
        highlightStars(selectedRating, stars);
        window.ratingValues[container.id] = selectedRating;
      });
    });

    function highlightStars(rating, stars) {
      stars.forEach(star => {
        star.classList.toggle('filled', parseInt(star.getAttribute('data-value')) <= rating);
      });
    }
  });
});
