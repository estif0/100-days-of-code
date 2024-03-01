document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    let tickedNumbers = JSON.parse(localStorage.getItem('tickedNumbers')) || [];

    // Generate cards
    for (let i = 0; i <= 99; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = i;
        card.dataset.number = i; // Add a data-number attribute
        card.onclick = () => toggleCard(card, i);
        cardContainer.appendChild(card);
    }

    // Load ticked numbers from localStorage
    tickedNumbers.forEach(num => {
        const card = document.querySelector(`.card[data-number="${num}"]`);
        if (card) {
            card.classList.add('ticked');
        }
    });

    function toggleCard(card, num) {
        card.classList.toggle('ticked');
        const index = tickedNumbers.indexOf(num);
        if (card.classList.contains('ticked')) {
            if (index === -1) {
                tickedNumbers.push(num);
            }
        } else {
            if (index !== -1) {
                tickedNumbers.splice(index, 1);
            }
        }
        localStorage.setItem('tickedNumbers', JSON.stringify(tickedNumbers));
    }
});
