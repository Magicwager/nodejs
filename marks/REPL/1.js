/**
 * 通过JS创建一个REPL环境
 * 运行后会进入REPL环境中
 */
const repl = require('repl');
let context = repl.start().context;
context.name = "Magic_wager";
context.sayHello = function(){
    console.log(`I'm ${context.name}`)
}

