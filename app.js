let tg = window.Telegram.WebApp;
tg.expand()

let usercard = document.getElementById("usercard")

let p = document.createElement('p');

p.innerText = `${tg.initDataUnsafe.first_name}`; //показываем user_id
usercard.appendChild(p); //добавляем
var link = 
let btn1 = document.getElementById("btn1")

btn1.addEventListener("click", function(){
    window.open(link);
})
