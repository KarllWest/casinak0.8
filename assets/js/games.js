// Отримуємо всі кнопки "Play Now!"
const openGameBtns = document.querySelectorAll(".mybtn2"); // Всі кнопки "Play Now!"
const gameModal = document.getElementById("gameModal"); // Модальне вікно
const closeModal = document.getElementById("closeModal"); // Кнопка закриття
const gameFrame = document.getElementById("gameFrame"); // iframe для гри

// Функція для відкриття модального вікна з відповідним слотом
openGameBtns.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
        event.preventDefault(); // Забороняємо стандартний перехід за посиланням
        // Встановлюємо джерело iframe в залежності від кнопки
        switch (index) {
            case 0:
                gameFrame.src = "https://great.com/slots/the-dog-house-megaways/";
                break;
            case 1:
                gameFrame.src = "https://great.com/slots/gates-of-olympus/";
                break;
            case 2:
                gameFrame.src = "https://great.com/slots/frkn-bananas/";
                break;
            case 3:
                gameFrame.src = "https://great.com/slots/le-bandit/"; // Оновлена лінка для останньої кнопки
                break;
            case 4:
                gameFrame.src = "https://great.com/slots/icon5"; // Замість цього вставте правильний URL
                break;
            case 5:
                gameFrame.src = "https://great.com/slots/icon6"; // Замість цього вставте правильний URL
                break;
            default:
                break;
        }
        gameModal.style.display = "block"; // Відкриваємо модальне вікно
    });
});

// Закриття модального вікна при натисканні на "X"
closeModal.addEventListener("click", function () {
    gameModal.style.display = "none";
});

// Закриття при кліку поза вікном
window.addEventListener("click", function (event) {
    if (event.target === gameModal) {
        gameModal.style.display = "none";
    }
});
