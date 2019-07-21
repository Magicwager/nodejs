/**
 * 在linux输入输出都对应一个文件描述符，它是以一个数字
 * 0 标准输入
 * 1 标准输出
 * 2 错误输出
 */

 //
 /**
  * 标准输入,在这里的意思是调起进程的标准输入，然后输入的data通过console.log输出
  */
/* process.stdin.on('data',function(data){
    console.log(data)//data为Buffer
}) */
/**
 * 标准输出
 * 我们平常用到的console.log就是标准输出，其实是调用了process.stdout.write
 */
console.log("hello")
process.stdout.write("hello")

/**
 * 错误输出
 * console.error就是错误输出，其实是调用了process.stderr.write
 */
console.error("error")
process.stderr.write("error")
