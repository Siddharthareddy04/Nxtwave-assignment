let time = 25 * 60;
let timerInterval;
let running = false;

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timerInterval = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                running = false;
                alert("CountDown Zero");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    running = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    time = 25 * 60;
    running = false;
    updateDisplay();
}

function shortBreak() {
    clearInterval(timerInterval);
    time = 5 * 60;
    running = false;
    updateDisplay();
}

function longBreak() {
    clearInterval(timerInterval);
    time = 15 * 60;
    running = false;
    updateDisplay();
}
