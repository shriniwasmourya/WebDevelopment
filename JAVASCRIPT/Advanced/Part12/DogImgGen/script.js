let api = 'https://dog.ceo/api/breeds/image/random';
let btn = document.querySelector('button');
let img = document.querySelector('.img');
let loader = document.querySelector('.loader');
let p = document.querySelector('p');

async function dog() {
    loader.style.display = 'block';
    img.style.display = 'none'
       p.style.display = 'none'

    try{

        let result = await axios.get(api);
        let r = result.data.message;
        img.setAttribute('src' , r);
        img.style.display = 'block';
           p.style.display = 'none'
    }catch{
        console.log("Connect Internet");
        p.style.display = 'block'
    }
    finally{
        loader.style.display = 'none';
    }
}

btn.addEventListener('click' , dog);