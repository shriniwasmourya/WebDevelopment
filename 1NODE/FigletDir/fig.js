const figlet = require('figlet');

figlet("Shriniwas Mourya" , function(err ,data){
    if(err){
        console.log("Somethign went wring")
        console.dir(err);
        return;
    }
    console.log(data);
});