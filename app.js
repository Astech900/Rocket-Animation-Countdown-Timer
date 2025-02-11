let dayEl = document.getElementById('days');
let hoursEl = document.getElementById('hourse');
let minutesEl = document.getElementById('minuts');
let secondEl = document.getElementById('seconds');

let d = 5;
let h = 24;
let m = 60;
let s = 60;

function getLaunchTime() {
    s--;

    if (s < 0) {
        s = 59;
        m--;
    }
    if (m < 0) {
        m = 59;
        h--;
    }
    if (h < 0) {
        h = 23;
        d--;
    }
    if (d < 0) {
        clearInterval(timer); 
        d = h = m = s = 0;
    }

    
    dayEl.innerHTML = d.toString().padStart(2, "0");
    hoursEl.innerHTML = h.toString().padStart(2, "0");
    minutesEl.innerHTML = m.toString().padStart(2, "0");
    secondEl.innerHTML = s.toString().padStart(2, "0");
}

let timer = setInterval(getLaunchTime, 1000);
