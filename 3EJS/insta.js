const express = require('express');

const app = express();

app.listen(8080 , ()=>{
    console.log("Server started at port 8080");
})

app.get('/' , (req , res)=>{
    res.send("<h1>Welcome to the isnta page</h1>")
})

app.get('/ig/:username' , (req , res) => {
    const instaData = require('./views/data.json')
    console.log("Root req received successfully");
    let {username} = req.params;
    const data = instaData[username];
    
    res.render("insta.ejs" , {username , data});
})