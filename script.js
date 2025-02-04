// Api url
// https://api.adviceslip.com/advice

const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const diceBtn = document.querySelector('.dice-btn');

const apiUrl = 'https://api.adviceslip.com/advice';

function fetchRandomAdvice() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            adviceId.textContent = `Advice #${data.slip.id}`;
            adviceText.textContent = data.slip.advice
        })
        .catch(error => {
            console.error('Error fetching or parsing data:', error);
            adviceText.textContent = 'Failed to load advice. Please try again.';
        });
}

fetchRandomAdvice();
diceBtn.addEventListener('click', fetchRandomAdvice);
