let fs = require('fs')

/**
 * 可写流
 * 往可写流写数据时，不会立刻写入文件，先写入缓存区，大小为hightWaterMark（默认16k）
 * 等缓存区满了才写入文件
 */

 let ws = fs.createWriteStream('wsTest.txt',{
     highWaterMark:3,
     flag:"w",
     encoding:"utf8"
 })
  ws.on("data",function(data){
     console.log(data)
 })

 ws.on("error",function(){
     console.log("出错了")
 })

 ws.on("drain",function(){
     console.log("drain")
 })

 ws.on("finish",function(){
    console.log("写完了")
})
//如果缓存区已满，返回false，若未满，返回true
 let flag = ws.write('1')
 console.log(flag)//
 //ws.end()//end后就不能写入了
 flag = ws.write('2')
 console.log(flag)//true
 flag = ws.write('3')
 console.log(flag)//false,缓存区已满，但不会写不进去，因为数据不会丢失，会缓存在内存中，等缓存区清空后再次从内存中读取
 flag = ws.write('4')
 console.log(flag)//false




