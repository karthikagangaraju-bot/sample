document.addEventListener('DOMContentLoaded', () => {

  // GitHub Button
  const githubBtn = document.querySelector('.github-btn');
  githubBtn.addEventListener('click', () => {
    window.open(
      'https://github.com/karthikagangaraju-bot',
      '_blank'
    );
  });

  // Learn More Button
  const learnBtn = document.querySelector('.learn-btn');
  learnBtn.addEventListener('click', () => {
    alert('More features coming soon!');
  });

  // Card animation
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = '0.6s ease';
      }
    });
  });

  cards.forEach(card => observer.observe(card));
});