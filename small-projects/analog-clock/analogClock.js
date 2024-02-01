const deg = 6;

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const initClockPointer = () => {
    const curTime = new Date();

    let hourDeg = curTime.getHours() * 5 * deg;
    let minDeg = curTime.getMinutes() * deg;
    let secDeg = curTime.getSeconds() * deg;

    hour.style.transform = `rotate(${hourDeg + minDeg / 12}deg)`;
    min.style.transform = `rotate(${minDeg + secDeg / 60}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;
}

const initClockTick = () => {
    const initialTick = document.querySelector(".tick");
    for (let i = 0; i < 11; i++) {
        let tickClone = initialTick.cloneNode(true);
        tickClone.id = `tick-${i + 1}`;
        tickClone.style.transform = `rotate(${30 * (i+1)}deg)`;
        initialTick.after(tickClone);
    }
}

initClockTick();

initClockPointer();

setInterval(initClockPointer, 1000);