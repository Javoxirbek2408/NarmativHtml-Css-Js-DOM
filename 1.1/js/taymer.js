const deadline = Date.now() + 3 * 24 * 60 * 60 * 1000;

const [daysElement, hoursElement, minutesElement, secondsElement] = document.querySelectorAll('.taim-card__textTwo')

function updateTimer() {
    const timeLeft = deadline - Date.now()

    if (timeLeft <= 0) {
        clearInterval(timerInterval)
        [daysElement, hoursElement, minutesElement, secondsElement].forEach(el => el.textContent = "00");
        alert('aksiya tugadi!')
        return
    }

    const units = [
        Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
        Math.floor((timeLeft / (1000 * 60)) % 60),
        Math.floor((timeLeft / (1000)) % 60)
    ];

    [daysElement, hoursElement, minutesElement, secondsElement].forEach((el, i) => {
        el.textContent = units[i].toString().padStart(2, 0)
    });

}

const timerInterval = setInterval(updateTimer, 1000)

