document.addEventListener('DOMContentLoaded', () => {
  let ticking = false;
  const container = document.querySelector('.stack-cards-container');
  const cards = document.querySelectorAll('.stack-cards__item');

  function updateCardStates() {
    const containerRect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = Math.max(0, Math.min(cards.length, (scrollPosition - containerRect.top + windowHeight * 0.30) / (windowHeight * 0.48)));
    const visibleSteps = Math.floor(progress);
    const numCards = cards.length;

    cards.forEach((card, index) => {
      const cardStep = numCards - index;
      if (visibleSteps >= cardStep) {
        card.classList.add('slide-up');
      } else {
        card.classList.remove('slide-up');
      }
    });

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateCardStates);
      ticking = true;
    }
  }

  document.addEventListener('scroll', onScroll, { passive: true });
  updateCardStates();
});
