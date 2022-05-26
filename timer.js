const start = document.getElementById('start');

let time;
let startMin;

start.addEventListener('click', startClock);



const countdownEl = document.getElementById('countdown');

function startClock() {
    startMin = timer.value;
    time = startMin * 60;
    start.classList.add('hide');
    setInterval(updateCountdown, 1000);

}


function updateCountdown() {
    const min = Math.floor(time / 60);
    let second = time % 60;


    second = second < 10 ? '0' + second : second;
    countdownEl.innerHTML = `${min}:${second}`;

    time--;

}