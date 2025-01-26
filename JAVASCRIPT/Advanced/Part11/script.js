// let h1 = document.querySelector('h1');


// function changClr(color){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             h1.style.backgroundColor = color;
//             resolve();
//         }, 1000);
//     })
// }

// changClr("red").then((result)=>{
//     console.log("promised resolve")
//     return changClr("yellow")
// })
// .then((result)=>{
//     console.log("yellow color applied");
//     return changClr("green");
// })

// .then((result)=>{
//     console.log("Green color applied")
// })

// .catch((error)=>{
//     console.log("Color not applied due to some reason")
// })

/* Promises in js */


// function saveToDb(data){
    
//     return new Promise ((resolve , reject)=>{
//         let internetSpeed = Math.floor(Math.random() * 10)+1;

//         if(internetSpeed > 3){
//             resolve("Data was saved");
//         }else{
//             reject("Data not save , Slow internet connection");
//         }

//     })
// }

// saveToDb("Shriniwas").then((result)=>{
//     console.log("Promise resolve");
//     return saveToDb("Mourya");
// })

// .then((result)=>{
//     console.log("Maurya was display successfully");
//     console.log(result)
//     return saveToDb("BCA second year");
// })

// .then((result)=>{
//     console.log(result);
//     console.log("BCA second year display successfully")
// })
// .catch((error)=>{
//     console.log(error)
//     console.log("Promise not resolve");
// })



/* Async Function */

// async function greet() {
//     // throw "OOPs , Page not found";
//     return "Hello Developers";
// }


// greet().then((result)=>{
//     console.log("Promise was resolved");
//     console.log("reuslt was ", result);
// })

// .catch((err)=>{
//     console.log("Error : ", err);
// })


/* Await Keyword */

function randomNum(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*10);
            if(num>8){
                reject("number that through error is generated unexpectively");
            }
            console.log(num)
            resolve("Number generate successfully");
        }, 1000);
    });
}

/* Handling rejection with await using try - catch*/

async function  demo() {
    try{

        await randomNum();
        await randomNum();
        await randomNum();
        randomNum();
    }catch(err){
        console.log(err);
    }
    }

