const express = require('express');

const mongoose=require('mongoose');
const server=express();
server.use(express.urlencoded({extended:false}));
server.use(express.json());
const dbURI="mongodb+srv://Ayushman:AyushmanT@cluster0.ljjqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>console.log('Database Connected'))
.catch((err)=>console.log(err))
server.get("/",(req,res)=>{
res.send("This is a 'Get' response from server.js");
});
server.post("/save-products",(req,res)=>{
    console.log("req.body in save-products route: ",req.body);
    console.log("Hi again!");
    res.send("This is a 'Post' response from server.js");
});
server.listen(3000,()=>{
    console.log('Server is listening on port 3000...');
});




// var cors = require('cors');
// var bodyparser=require('body-parser');
// var morgan=require('morgan');
// const http=require('http');
// const port= 3000;
// const server=http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html')
//     res.end('<h1> This is Ayushman</h1> <p> </p>');
// })
// server.listen(port,()=>{console.log('Server is listening on port ${port}');
// });
// Require essential modules within the server.js file 
// (mainly express, bodyparser module, morgan and cors) [ the utility of modules apart from express will be explained, just import them for time being using require keyword]
// /