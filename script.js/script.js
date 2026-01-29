document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // Add a simple fade-in effect
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Handle "Learn More" scroll
    document.querySelector('.learn-btn').addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.cards').offsetTop - 50,
            behavior: 'smooth'
        });
    });
});