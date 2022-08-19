const Day = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('mins');
const Seconds = document.getElementById('second');


const newyears = "1 Jan 2023";
function countdown(){
    const newYear = new Date(newyears);
    const curdate = new Date();
    const seconds = (newYear-curdate)/1000;

    const days = Math.floor(seconds/3600/24)
    const hours = Math.floor(seconds/3600) % 24
    const mins = Math.floor(seconds/60)%60
    const sec = Math.floor(seconds) % 60

    Day.innerHTML = formatTime(days);
    Hours.innerHTML = formatTime(hours);
    Minutes.innerHTML = formatTime(mins);
    Seconds.innerHTML = formatTime(sec);
   
}
function formatTime(time){
    return time<10 ? (`0${time}`) : time;
}
countdown();
setInterval(countdown,1000)