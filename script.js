// Get references to elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Add click event to toggle menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
