let btn = document.querySelectorAll("button");
let inp = document.querySelector("input");

let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");
let b0 = document.querySelector(".b0");
let bd = document.querySelector(".bd");
let bx = document.querySelector(".bx");
let bminus = document.querySelector(".bminus");
let bplus = document.querySelector(".bplus");
let bequal = document.querySelector(".bequal");
let bdot = document.querySelector(".bdot");
let ac = document.querySelector('.ac');
let cross = document.querySelector('.cross')
let beforecal;
let aftercal = 3;


b1.addEventListener("click", keypress);
b2.addEventListener("click", keypress);
b3.addEventListener("click", keypress);
b4.addEventListener("click", keypress);
b5.addEventListener("click", keypress);
b6.addEventListener("click", keypress);
b7.addEventListener("click", keypress);
b8.addEventListener("click", keypress);
b9.addEventListener("click", keypress);
b0.addEventListener("click", keypress);
bx.addEventListener("click", divideFun);
bx.addEventListener("click", keypress);
bminus.addEventListener("click", divideFun);
bminus.addEventListener("click", keypress);
bplus.addEventListener("click", divideFun);
bplus.addEventListener("click", keypress);
bdot.addEventListener("click", keypress);
bd.addEventListener("click", divideFun);
bd.addEventListener("click", keypress);
bequal.addEventListener("click", finalResult);
ac.addEventListener('click' , (e)=>{
    inp.value = "";
})



function opeator() {}
let op;

function keypress() {
  inp.value += this.innerText;

  if (this.innerText === "+") {
    op = this.innerText;
  } else if (this.innerText === "-") {
    op = this.innerText;
  } else if (this.innerText === "*") {
    op = this.innerText;
  }else if(this.innerText === '/'){
    op = this.innerText;
  }
}

function finalResult() {
  aftercal = inp.value;
  aftercal = aftercal.slice(1);
  console.log(aftercal);
  let result;

  console.log(op);

  if (op === "+") {
    result = Number(beforecal) + Number(aftercal);
  } else if (op === "-") {
    result = Number(beforecal) - Number(aftercal);
  } else if (op === "/") {
    result = Number(beforecal) / Number(aftercal);
  } else if (op === "*") {
    result = Number(beforecal) * Number(aftercal);
  }

  console.log(result);
  inp.value = result;
}

function divideFun() {
  beforecal = inp.value;
  inp.value = "";
  console.log(beforecal);
}

cross.addEventListener('click' , (e)=>{
    let value = inp.value;
    inp.value = Math.floor(value/10);
    
})
