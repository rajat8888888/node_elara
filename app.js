//  BACKEND DEVELOPER

// Node Js--> its envoirment that run javascript
  // non blocking i/o operaters


  // IIFE--> imidate invoke function expression

//   (function(name){
//     console.log("vasant fn",name);
//   })("good boy")

// console.log(module);

// default import
// const add =require('./logger');
// console.log(add(10,20));

// named import

// const logger=require('./logger');
// console.log(logger.add(5,15));

// const {add, multiply}=require('./logger')
// console.log(add(10,20),multiply(10,20));


// express
const express=require('express');
//const {log}=require("./logger")
const app=express();
//log.display();

app.get('/',(req,res)=>{
  res.write("welcome to Express")
  res.end()
})
app.listen(3000,()=>console.log("server is runing on 3000"))