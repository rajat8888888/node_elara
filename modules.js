// MODULE--> its singfle js file (single perpose librarie)

// NPM--> Node packet librarie-->3rd party librarie

// const { log } = require("console");
// const path=require("path")
// console.log(path);

// console.log('filename-->',__filename);
// console.log(path.parse(__filename));

// console.log('dirname-->',__dirname);
// console.log(path.parse(__dirname))

//os
const { log } = require("console");
const os=require("os");
// console.log(os.cpus(),os.cpus().length);


//  Total  memory
//console.log(os.totalmem()); //bytes

// Free memory
//console.log(os.freemem())


// platform runig
// console.log(os.platform());

//  artiteacher 
// console.log(os.arch());
  // wifi detail
// console.log(os.networkInterfaces());


// File system module
const fs=require("fs");

// both syncronus and asyncronus

// syncronus
// const files=fs.readdirSync('./')
// console.log(files);

// asyncronuys

//   fs.readdir('./',(file,err)=>{
//     if (err) console.log(err)
//  else console.log("file-->",file);
//   })


// read file
//  syncronus
// const fileData=fs.readFileSync('./demo.txt','utf-8');
//   console.log(fileData);

// asyncronus 
  // fs.readFile('./demo.txt','utf-8',(err,data)=>{
  //   if(err)
  //   console.log(err)
  //   else 
  //   console.log(data)
  // })

  // writing  Data

  // const person={
  //   name: "Thanusk",
  //   age: 2024,
  // }
  
  //   fs.writeFile("person.json", JSON.stringify(person),(err,data)=>{
  //     if(err) console.log(err)
  //     else console.log(data);;
  //   })

  // const textdata='today is thuesday'
  //  fs.writeFile("thuesdayfile",textdata,(err)=>{
  //   if(err)
  //   console.log(err);
  //   else 
  //   console.log("file is saved");
  //  })

  // EVENT

  // const EventEmitter=require('events');
  // const emitter=new EventEmitter();
  
  // listiening event
  // emitter.on("message recive",()=>{
  //   console.log("message is recived from client");
  // })
  // emitter.on('eventWriting',(args)=>{
  //   console.log(args);
  // })
  // Raise event
//   emitter.emit("message recive");
//  emitter.emit('eventWriting',{
//   name :"amozon boy",
//   companey:"amazone",
//  })


// creating server
const http=require("http");
const { json } = require("stream/consumers");

// listner function
const server=http.createServer((req,res)=>{
  if (req.url==="/"){
    req.write("welcome to node class");
    req.end();
  }
  if(req.url==='/name'){
    req.write(JSON.stringify(['virat','sachin','dhoni','kapil']));
    req.end();
  }
  if(req.url==='/post'){
    let person={
      name:"Rajat",
      ager:10,
      place:'siwan',
    }
  }
})

// listner
server.on('connection',()=>{
  console.log("new connection happen-----");
})
// triger
server.listen(3000);
console.log("server is listing at localhost 3000-------");