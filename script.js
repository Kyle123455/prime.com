// Add any JavaScript functionality you need here
// For example, smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = card.getAttribute("data-link");
        });
    });
});
