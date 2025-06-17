function resetStarRatings() {
  const ratingContainers = document.querySelectorAll('.star-rating');
  ratingContainers.forEach((container) => {
    const stars = container.querySelectorAll('.star');
    const ratingValue = container.querySelector('.ratingValue');
    // Remove 'filled' class from all stars
    stars.forEach(star => star.classList.remove('filled'));
    // Reset rating text
    if (ratingValue) ratingValue.textContent = '';
    // Reset global rating value
    if (container.id) window.ratingValues[container.id] = 0;
  });
}
