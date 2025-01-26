let url = 'http://universities.hipolabs.com/search?name=';

let p = document.querySelector(".p");
let btn = document.querySelector('button');
let user = document.querySelector('input')


async function find() {
    let name = user.value;
    p.innerText = "";
    try{

        let result = await axios.get(url+name);
        for(let i=0 ; i<result.data.length ; i++){
            // console.log(result.data[i].name)
            p.innerText += result.data[i].name + "\n";
            
        }
    }
    catch(err){
        console.log("Error found : " , err);
    }
}

btn.addEventListener("click" , find);
