/**
 * 日志输出
 * 在执行时可以保存至文件，1为
 */
// 1>normal.log 把标准输出流输出到文件normal.log
console.log(1);
console.info(2);
// 2>err.log 把错误输出到文件err.log中,同时不会阻塞下面的执行
console.warn(3)
console.error(4)

/**
 * 执行时间,console.time与console.timeEnd的标志得相同
 */
 console.time("for");
 for(let i=0;i++;i<1000000){
     i=i+1
 }
 console.timeEnd("for")
 //for: 0.119ms

 /**
  * 断言:如果正确不输出，错误则抛错
  */
 function sum(a,b){
     return a+b
 }
 //console.assert(sum(1,2)==4,"sum函数报错")//AssertionError [ERR_ASSERTION]: sum函数报错

/**
 * 遍历对象结果，这对于检查大型复杂对象很有用
 */
let obj = {
    name:"magic_wager",
    handle:{
        sayHello:function(){
            console.log("hello")
        },
        work:{
            coding:function(){
                onsole.log("coding")
            }
        }
    }
}
//console.dir(global)
console.dir(obj,{
    depth:null,
    showHidden:true,
    color:true
})
/**
 * { name: 'magic_wager',
  handle:
   { sayHello:
      { [Function: sayHello]
        [length]: 0,
        [name]: 'sayHello',
        [arguments]: null,
        [caller]: null,
        [prototype]: sayHello { [constructor]: [Circular] } },
     work:
      { coding:
         { [Function: coding]
           [length]: 0,
           [name]: 'coding',
           [arguments]: null,
           [caller]: null,
           [prototype]: coding { [constructor]: [Circular] } } } } }
 */

/**
 * 跟踪当前代码的调用栈
 */
console.trace()
/**
 *   at Object.<anonymous> (/Users/magic_wager/Documents/wager_git/nodejs/marks/Global/co
nsole.js:56:9)
    at Module._compile (module.js:635:30)
    at Object.Module._extensions..js (module.js:646:10)
    at Module.load (module.js:554:32)
    at tryModuleLoad (module.js:497:12)
    at Function.Module._load (module.js:489:3)
    at Function.Module.runMain (module.js:676:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
 */
