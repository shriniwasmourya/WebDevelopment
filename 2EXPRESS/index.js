const express = require('express');

const app = express();

// console.log(app)

let port = 8080;

app.listen(port , ()=>{
    console.log(`server is started at port ${port}`);
})

// app.use((req , res) => {
//     console.log("Request receive");
//     res.send("<b>Shriniwas Mourya send you a response</b>");
// })

app.get('/' , (req , res)=>{
    console.log("Route route req received");
    res.send("Route response send successfully in our side");
})

// app.get('/apple' , (req , res)=>{
//     console.log("apple route req received");
//     res.send("Apple response send successfully in our side");
// })
// app.get('/feedback' , (req , res)=>{
//     console.log("feedback route req received");
//     res.send("feedback response send successfully in our side");
// })

// app.get('/search' , (req , res)=>{
//     console.log("Search route req received");
//     res.send("Search response send successfully in our side");
// })


// app.get('*' , (req , res)=>{
//     console.log("apple route req received");
//     res.send("<h1> Sorry! , This page does not exit </h1>");
// })

// app.post('/' , (req , res)=>{
//     console.log("apple route req received");
//     res.send("You contacted root path by Post Method");
// })

// /* Argument like username or password */

// app.get("/:username" , (req , res) => {
//     let {username} = req.params;
//     console.log(username);
    
//     res.send(`welcome ${username}`)
// })


/*Query handle in Express */

app.get("/search" , (req , res) => {
    let {q} = req.query;
    console.log(q);
    res.send(`you search about ${q}`)
})