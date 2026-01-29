document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the buttons and cards
    const learnBtn = document.querySelector('.learn-btn');
    const cardsSection = document.querySelector('.cards');

    // 2. Add click functionality to the "Learn More" button
    if (learnBtn && cardsSection) {
        learnBtn.addEventListener('click', () => {
            // Smoothly scroll down to the features section
            cardsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    }

    // 3. Simple animation for the cards (Yellow Bulb, Blue Laptop, Lavender Gear)
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';

        // Trigger entrance animation with a slight delay for each card
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});