// ===== FADE-IN ANIMATION FOR TEAM CARDS =====
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".team-card");

  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight - 100) {
        card.classList.add("visible");
      }
    });
  });
});
