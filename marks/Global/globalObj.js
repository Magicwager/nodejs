/**
 * global
 * 全局的命名空间对象,在浏览器中，顶层作用域是全局作用域。 这意味着在浏览器中 var something 将定义一个新的全局变量。 在 Node.js 中，这是不同的。 顶层作用域不是全局作用域，Node.js 模块中的 var something 的作用域只在该模块内。
 */
console.log(global)

/**
 * __dirname当前模块的目录名。 与 __filename 的 path.dirname() 相同
 * __filename这是当前的模块文件的绝对路径（符号链接会被解析）
 */
let path = require("path")
console.log(__dirname)
console.log(__filename)
console.log(path.dirname(__filename))

/**
 * process全局变量进程
 */

 /**
  * nextTick与setImmediate的区别
  * nextTick把回调函数放在当前执行栈的底部，setImmediate把回调函数放在事件队列的尾部​
  *
  */

  function read(){
    setImmediate(function(){
        console.log(0)
        setImmediate(function(){
            console.log(2)
            process.nextTick(function(){
                console.log(3)
            })
        })
        process.nextTick(function(){
            console.log(4)
        })
        
    })
    process.nextTick(function(){
        console.log(1)
    });
  }
  read()//1,0,4,2,3

