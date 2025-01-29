const express = require("express");
const path = require('path')        //used to join 2 path like humne age server kisi dushri  dir se start krdia to express view folder ko usi diretory me dekhega mtlb jaha se server starthua hai na ki orignial view folder ko

const app = express();
app.set("views" , path.join(__dirname , "/views"))
app.listen(8080, () => {
  setTimeout(() => {
    console.log("Server started at port 8080");
  }, 1000);

  console.log("Server is starting at port 8080");
});



app.get("/calculator", (req, res) => {
  // res.send("you req at Root directory <br> Permission denied!")
  res.render("calculator.ejs");
});


app.get("/rolldice", (req, res) => {
  let num = Math.floor(Math.random()*6)+1;
  console.log(num);
  console.log("root req received");
  res.render("rolldice.ejs" , {num});
});


app.get("/:username", (req, res) => {
  let {username} = req.params;
  console.log(username);
  console.log("root req received");
  res.render("home.ejs" , {username});
});