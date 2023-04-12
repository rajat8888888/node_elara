// function add(n1,n2){
//     return n1+n2;
// };

// function multiply(n1,n2){
//     return n1*n2;
// };


// default exports
//module.exports=add;

// named exports
// module.exports.add=add;


//best way
// module.exports={
//     add,
//     multiply,
// };

// N ode--> modular programing we can export by module in 

class Log{
   constructor(name){
    this.name=name;
   }
   display(){
    console.log(`this is log--  ${this.name}`);
   }
}
const log=new Log('vasant');
log.display();

module.exports={
    log
}