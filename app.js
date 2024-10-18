let tg = window.Telegram.WebApp;
tg.expand()

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `Hello ${tg.initDataUnsafe.user.username} !`;

usercard.appendChild(p);
