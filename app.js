let hrs = document.getElementById('hrs');
let mins = document.getElementById('mts');
let sec = document.getElementById('sc');


setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours().toString().padStart(2, '0');
    mins.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    sec.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
}, 1000);
