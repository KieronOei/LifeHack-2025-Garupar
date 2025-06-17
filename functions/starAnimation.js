document.addEventListener('DOMContentLoaded', function() {
  const stars = document.querySelectorAll('#starRating .star');
  const ratingValue = document.getElementById('ratingValue');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('mouseover', function() {
      const val = parseInt(this.getAttribute('data-value'));
      highlightStars(val);
    });
    star.addEventListener('mouseout', function() {
      highlightStars(selectedRating);
    });
    star.addEventListener('click', function() {
      selectedRating = parseInt(this.getAttribute('data-value'));
      ratingValue.textContent = `Rating: ${selectedRating}`;
      highlightStars(selectedRating);
      // You can now use selectedRating as the user's rating
    });
  });

  function highlightStars(rating) {
    stars.forEach(star => {
      star.classList.toggle('filled', parseInt(star.getAttribute('data-value')) <= rating);
    });
  }
});
