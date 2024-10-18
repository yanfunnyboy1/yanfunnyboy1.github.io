let tg = window.Telegram.WebApp;
tg.expand()

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `Hello ${tg.initDataUnsafe.user.first_name} !`;

usercard.appendChild(p);
