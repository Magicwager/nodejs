
let EventEmitter = require("./EventEmitter.js")
let myEmitter = new EventEmitter();

myEmitter.on("hello",()=>{
    console.log("hello")
})
myEmitter.emit("hello");

myEmitter.on("hello",(toSomebody)=>{
    console.log(`Hello,${toSomebody},I'm wager`)
})
myEmitter.on("question",()=>{
    console.log("what's your name")
})

myEmitter.emit("question");

myEmitter.emit("hello","John");

myEmitter.once("speak",(toSomebody)=>{
    console.log(`${toSomebody},let's begin`)
})
myEmitter.emit("speak","Everybody").emit("speak","Everybody");
