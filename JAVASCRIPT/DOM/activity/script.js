
let btn = document.querySelector("button");
let menu = document.querySelector(".menu");
let p = document.querySelector('p');

let color = ["red", "green", "blue" , "yellow"];

btn.addEventListener("click", generateCol);

function generateCol() {
    p.innerText = "";
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    p.innerText +=  ` rgb(${r} , ${g} , ${b})`;
  menu.style.backgroundColor = `rgb(${r} , ${g} , ${b})`;
}
