document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    let tickedNumbers = JSON.parse(localStorage.getItem('tickedNumbers')) || [];

    // Generate cards
    for (let i = 0; i <= 99; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = i;
        card.addEventListener('click', () => {
            card.classList.toggle('ticked');
            if (card.classList.contains('ticked')) {
                tickedNumbers.push(i);
            } else {
                tickedNumbers = tickedNumbers.filter(num => num !== i);
            }
            localStorage.setItem('tickedNumbers', JSON.stringify(tickedNumbers));
        });
        cardContainer.appendChild(card);
    }

    // Load ticked numbers from localStorage
    tickedNumbers.forEach(num => {
        const card = document.querySelector(`.card:contains(${num})`);
        if (card) {
            card.classList.add('ticked');
        }
    });
});
