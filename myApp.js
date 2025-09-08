let express = require('express');
let app = express();
console.log("Hello World");
require('dotenv').config()

// app.get("/",function(req, res) {
//     res.send('Hello Express');
// })
absolutePath = __dirname + '/views/index.html'

app.get("/",function(req, res) {
    res.sendFile(absolutePath);
})

app.use("/public",express.static(__dirname + "/public"));

// app.get("/json",function(req,res){
//     res.json(
//         {"message": "Hello json"} 
//     )
// })


// app.get("/json",function(req,res){

//     let message = "Hello json";
//     if(process.env.MESSAGE_STYLE=="uppercase"){
//         message=message.toUpperCase();
        
//     }
//     res.json(
//         {"message": message} 
//     );
// })


// app.use("/",(req, res, next) => {
//     console.log(req.method+" "+req.path+" - "+req.ip);
//     next();
// })


// app.get('/now', function(req, res, next) {
//     req.time = new Date().toString();  // Hypothetical synchronous operation
//     next();
//   }, function(req, res) {
//     res.send({
//         time: req.time
//     });
//   });

  

  app.get('/:word/echo',function(req,res){
    res.send({
        echo:req.params.word
    })

  })































 module.exports = app;
