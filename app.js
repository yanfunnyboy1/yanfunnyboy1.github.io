let tg = window.Telegram.WebApp;
tg.expand()

let usercard = document.getElementById("usercard")

let p = document.createElement('p');
p.innerText = `${tg.initDataUnsafe.user.username}`; //показываем user_id
usercard.appendChild(p); //добавляем
var link = "ton://transfer/UQBtGBmUDj8trZTobcT7nYCfigF7R9JSi9sTxrR0zL0eAm6B?amount=500000000&text="+ tg.initDataUnsafe.user.id;
let btn1 = document.getElementById("btn1")

btn1.addEventListener("click", function () {
    window.open(link);
})
