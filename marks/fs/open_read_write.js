
//writeFile,readFile,appendFile他们都是把文件当成一个整体来操作的，当文件特别大，大于内存的时候无法执行这样的操作
//我们需要精确的控制读取的字节数

let fs = require("fs")
/**
 * @ open 打开文件
 * 1.文件路径
 * 2.操作描述
 * 3.权限标志
 * 4.回调函数：fd-->文件描述符(从3开始，0，1，2被占用了的详细看std.js)
 */
/**
 * @ Function read 读取文件
 * @ fd文件描述符
 * @ buffer 数据将写入的buffer缓冲区
 * @ offset buffer的偏移量，从buffer的第几个字节开始
 * @ length 读取的数据长度
 * @ position 读取文件的起始位置，如果为null。。。
 * @ callBack 三个参数err,bytesRead,buffer
 */
fs.open('./3.txt','r',0o666,function(err,fd){
    console.log(fd)
    let buffer = Buffer.alloc(3)
    //position自己控制
   /*  fs.read(fd,buffer,0,3,0,function(err,bytesRead,buff){
        console.log(buffer)
        console.log(buff.toString())//123
        fs.read(fd,buff,0,3,3,function(err,bytesRead,buff){
            console.log(buff.toString())//456,因为文件的起始位置变为3了
        })
    }) */
    //position 设置null，则文件自动跳转位置
    fs.read(fd,buffer,0,3,null,function(err,bytesRead,buff){
        console.log(buffer)
        console.log(buff.toString())//123
        fs.read(fd,buff,0,3,null,function(err,bytesRead,buff){
            console.log(buff.toString())//456,因为第一read文件后，指针自动跳到3了
        })
    })
})

/**
 * @ Function write 写文件
 * @ fd文件描述符
 * @ buffer 数据将写入的buffer缓冲区
 * @ offset buffer的偏移量，从buffer的第几个字节开始
 * @ length 读取的数据长度
 * @ position 读取文件的起始位置，如果为null。。。
 * @ callBack 三个参数err,bytesRead,buffer
 */
fs.open('4.txt','w',0o666,function(err,fd){
    console.log(fd);
    let buffer = Buffer.from("wager 你好")
    fs.write(fd,buffer,0,12,null,function(err,bytesWrite,buff){
        console.log(buff.toString())
    })
})