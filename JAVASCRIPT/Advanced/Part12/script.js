// let api = 'http://universities.hipolabs.com/search?name=india';
let api = "https://catfact.ninja/fact";

// fetch(api).then((res)=>{
//     let result = res.json();
//     return result;
// })
// .then((data)=>{
//     console.log(data.fact)
// })

// .catch((err)=>{
//     console.log("Error while fetching data");
// })

/* Uisng Axions */
// let p = document.querySelector('.cat');
// let btn = document.querySelector('button');

// async function demoApi() {
//     try{

//         let result = await axios.get(api);
//         let fr = result.data.fact
//         p.innerHTML = fr;
//     }
//     catch(err){
//         p.innerHTML = "Slow internet connection , please try again later";
//     }
// }


// btn.addEventListener('click' , demoApi)



/* Senders headers with axios */

// let url = 'https://icanhazdadjoke.com/'

// async function demo() {
//     let config = {headers : {Accept : 'application/json'}};
//     let result = await axios.get(url , config);
//     console.log(result.data.joke)
// }