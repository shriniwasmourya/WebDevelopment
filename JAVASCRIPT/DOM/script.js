// let count=[];
// for(let i=1 ;i<=3 ; i++){
//     count = document.getElementsByClassName('a')[i];
// }
// console.log(count)


let classNumber = document.getElementsByClassName('a');
console.log(classNumber)


/*

HTMLCollection(3) [img.a, img.a, img.a]0: img.a1: img.a2: img.alength: 3[[Prototype]]: HTMLCollection
let n = doc
VM567:1 Uncaught ReferenceError: doc is not defined
    at <anonymous>:1:9
(anonymous) @ VM567:1
let n = document.querySelector('.a')
undefined
n
<img class=​"a" src=​"a1" alt=​"1img">​
n.getAttribute
ƒ getAttribute() { [native code] }
n.getAttribute()
VM742:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
    at <anonymous>:1:3
(anonymous) @ VM742:1
n.getAttribute('p')
null
n.getAttribute('alt')
'1img'
n.setAttribute('alt' , 'p')
undefined
n
<img class=​"a" src=​"a1" alt=​"p">​
n.classList
DOMTokenList ['a', value: 'a']0: "a"length: 1value: "a"[[Prototype]]: DOMTokenList
let c = n.classList
undefined
c
DOMTokenList ['a', value: 'a']
c.add('im1 , im12 , im123')
VM1032:1 Uncaught InvalidCharacterError: Failed to execute 'add' on 'DOMTokenList': The token provided ('im1 , im12 , im123') contains HTML space characters, which are not valid in tokens.
    at <anonymous>:1:3
(anonymous) @ VM1032:1
c.add('im1' , 'im12' , 'im123')
undefined
c
DOMTokenList(4) ['a', 'im1', 'im12', 'im123', value: 'a im1 im12 im123']
c.remove('f')
undefined
c
DOMTokenList(4) ['a', 'im1', 'im12', 'im123', value: 'a im1 im12 im123']
n
<img class=​"a im1 im12 im123" src=​"a1" alt=​"p">​
n.st
undefined
n.style.backgroundColor('red')
VM1210:1 Uncaught TypeError: n.style.backgroundColor is not a function
    at <anonymous>:1:9
(anonymous) @ VM1210:1
n.style.backgroundColor = 'red'
'red'
n.style.color = 'red'
'red'
n.style.fontSize = '3rem'
'3rem'
n.classList.contains('red')
false
n.classList.contains('im1')
true
n.classList.toggle('im1')
false
n.classList.toggle('imsdfsd1')
true

*/


/* Navigaition

Parent

Children

preEleSib/nextElesibling


----------code----------

let img = doc
VM1895:1 Uncaught ReferenceError: doc is not defined
    at <anonymous>:1:11
(anonymous) @ VM1895:1
let img = document.querySelector('.a')
undefined
img
<img class=​"a" src=​"a1" alt=​"1img">​
img
<img class=​"a" src=​"a1" alt=​"1img">​
let img = document.querySelectorAll('.a')
undefined
img
NodeList(3) [img.a, img.a, img.a]
img[1].parentElement
<div class=​"images">​…​</div>​
img[1].childNodes
NodeList []length: 0[[Prototype]]: NodeList
let div = document.querySelector('div")
VM2156:1 Uncaught SyntaxError: Invalid or unexpected token
let div = document.querySelector('div')
undefined
div
<div class=​"images">​…​</div>​
div.children
HTMLCollection(3) [img.a, img.a, img.a]0: img.a1: img.a2: img.alength: 3[[Prototype]]: HTMLCollection
div.childElementCount
3
img.isPrototypeOf
ƒ isPrototypeOf() { [native code] }
div.nextElementSibling
<script src=​"script.js">​</script>​
div.previousElementSibling
<h1>​Document object Model​</h1>​
img[0].previousElementSibling
null
img[0].previousElementSibling.style.backggroundColor='red'
VM2454:1 Uncaught TypeError: Cannot read properties of null (reading 'style')
    at <anonymous>:1:31
(anonymous) @ VM2454:1
img[1].previousElementSibling.style.backggroundColor='red'
'red'
img[1].previousElementSibling.style.backgroundColor='red'
'red'

*/



/* Addiding Elements

doc.createEle(p)


*Appendchild(ele)
*append(ele)
*prepend(ele)
*insertAdjacent(where , element)


et newEle = document.createElement('p')
undefined
newEle
<p>​</p>​
newEle.append("Hi i'm a new paragraph")
undefined
let body = document.querySelector('body')
undefined
body.append(newEle)
undefined
let anotherEle = document.createElement('button')
undefined
newEle.appendChild(anotherEle)
<button>​</button>​
anotherEle.append("click me")
undefined
anotherEle.prepend(newEle)
VM4341:1 Uncaught HierarchyRequestError: Failed to execute 'prepend' on 'Element': The new child element contains the parent.
    at <anonymous>:1:12
(anonymous) @ VM4341:1
let anoEle = document.createElement('span')
undefined
anoEle.app
undefined
anoEle.append("This is span here")
undefined
anotherEle.prepend(anoEle)
undefined
newEle.prepend(anoEle)
undefined


insertAdjacent('beforebegin' , newEle)
insertAdjacent('afterbegin' , newEle)
insertAdjacent('beforeend' , newEle)
insertAdjacent('afterend' , newEle)



REmove


body.removeChild()
p.remove()

*/







/* AddEventListener */

// let btn = document.querySelector('button');
// btn.addEventListener("click" , sayHello);

// function sayHello(){
//     console.log("Button was clicked");
//     console.log("Button was agian clicked")
// }

let body = document.querySelector("body");

// let p = document.createElement('p');
// p.append("This is paragraph")
// body.append(p);

// p.addEventListener("click" , ()=>{
//     console.log("p was click")
// })


/* use of 'this' in event listenere */

//  function changeColor(){
//     console.log(this.innerText);
//     body.style.backgroundColor = 'blue'
// }


/* Keyboard events */

let btn = document.querySelector('button')
let user =document.querySelector('input')
let h2 = document.querySelector('h2')
let key = [];
// btn.addEventListener("click",function (e) {
//         console.log(e);
//         console.log("Button was clicked");
//     })


// btn.addEventListener("dblclick",function(e){
//     console.log(e);
//     console.log("Button was clicked")
   
// })


// user.addEventListener('keydown' , (e)=>{
//     console.log(e)
//     console.log("Key was pressed")
//     h2.innerText = ""; 
//     h2.innerText += e.key;
//     console.log(e.code)
// })


/* Extracting data form */

let form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{
    let user =document.querySelector('input')
    alert("Welcome back Mr. ",user.value);
    console.log("Submit form successful");
})