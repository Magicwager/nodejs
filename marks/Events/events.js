/**
 * 事件触发器
 */
//引入events模块，返回一个EventEmitter事件触发器对象
let EventEmitter = require('events')
// say继承EventEmitter事件触发器对象
class say extends EventEmitter{}
//实例化一个say,sayHello为say对象的一个实例，因此也拥有了事件触发器属性
let sayHello = new say();
process.nextTick(function(){
    sayHello.on("hello",function(){
        console.log("Nice to meet you")
    })
})
setImmediate(function(){
    sayHello.on("hello",function(){
        console.log("I'm wager")
    })
    //触发时按照监听器注册顺序，依次同步地调用监听函数
    sayHello.emit("hello")
    /**
     *  Hi
        Nice to meet you
        I'm wager
     */
})
//绑定一个hello事件，并且为hello事件添加一个监听器（回调函数）
sayHello.on("hello",function(){
    console.log("Hi")
})
//触发hello事件，驱动执行回调函数
sayHello.emit("hello")

sayHello.removeAllListeners("hello",function(){
    console.warn("hello事件停止")
})