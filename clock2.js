setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let currenttime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    clk.innerHTML = currenttime;
    if (currenttime >= daytime && currenttime < nighttime) clk.style.color = cold;
    else clk.style.color = coln;
}

function btn1click() {
    h = 360 + (h - 20) % 360;
    refresh();
}

function btn2click() {
    h = (h + 20) % 360;
    refresh();
}

function btn3click() {
    if (l <= 45) l += 5;
    refresh();
}

function btn4click() {
    if (l >= 10) l -= 5;
    refresh();
}

function gofullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}

function refresh() {
    cold = "hsl(" + h + ", 100%, " + l + "%)";
    coln = "hsl(" + h + ", 100%, " + (l / nf) + "%)";
    gofullscreen();
    showTime();
}

const daytime = '06:30';
const nighttime = '22:00';
let l = 50;
let h = 0;
let nf = 5
let coln = "hsl(" + h + ", 100%, " + (l / nf) + "%)";
let cold = "hsl(" + h + ", 100%, " + l + "%)";
const btn = document.getElementById('btn2');
const clk = document.getElementById("clock");

showTime();