// const crypto=require('crypto')
// const os=require('os')
// console.log("cpu length--",os.cpus().length);
// const start=Date.now()

// // syncronus

// // crypto.pbkdf2Sync("password","salt",10000,512,"sha512");
// // console.log(Date.now()-start);

// // asyncronus
// //  console.log( process.env);
// process.env.UV_THREADEPOOL_size=4;
//  const Max_Call=10;

// // for(let i=0;i<Max_Call;i++){
// //     crypto.pbkdf2("password","salt",10000,512,"sha512",()=>{
// //     console.log(`iteration ${i+1}`,Date.now()-start);
// //     })
// // }

// const https=require('https');
//      for(let i=0;i<Max_Call;i++){
//   https
//   .request('https://www.google.com',(res)=>{
//     res.on('data',()=>{
//       //  console.log('got the data');
//     });
//     res.on('err',()=>{
//         console.log(err);
//     });
//     res.on('end',()=>{
//         console.log(`iteration ${i+1}`,Date.now()-start);
//     });
 
//   })
//   .end();
// }





