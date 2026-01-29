// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // 1. Handle Button Clicks
    const githubBtn = document.querySelector('.github-btn');
    const learnBtn = document.querySelector('.learn-btn');

    if (githubBtn) {
        githubBtn.addEventListener('click', () => {
            console.log("Redirecting to GitHub...");
            window.open('https://github.com/YOUR_GITHUB_USERNAME', '_blank');
        });
    }

    if (learnBtn) {
        learnBtn.addEventListener('click', () => {
            alert("More information coming soon!");
        });
    }

    // 2. Simple Scroll Reveal Animation for Cards
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        
        observer.observe(card);
    });
});