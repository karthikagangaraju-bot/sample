document.addEventListener('DOMContentLoaded', () => {

  const githubBtn = document.querySelector('.github-btn');
  const learnBtn = document.querySelector('.learn-btn');

  // GitHub button → opens YOUR profile
  if (githubBtn) {
    githubBtn.addEventListener('click', () => {
      window.open(
        'https://github.com/karthikagangaraju-bot',
        '_blank'
      );
    });
  }

  // Learn More button
  if (learnBtn) {
    learnBtn.addEventListener('click', () => {
      alert('More information coming soon!');
    });
  }

  // Scroll reveal animation
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = 'all 0.6s ease-out';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});