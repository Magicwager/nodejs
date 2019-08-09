let fs = require('fs')

/**
 * 可读流，默认是创建了一块大小为64k的缓存区,但是可以指定缓存区大小（highWaterMark）,这样就一块一块的输出
 * 缓存区的作用是提高效率，从缓存区读取数据比从磁盘读取数据快得多
 * 
 */
//限定缓存区大小为3个字节，rsTest.txt大小为10个字节，所以输出4块
let rs =fs.createReadStream('rsTest.txt',{
    highWaterMark:3,
    flag:"r",//对文件进行何种操作
    mode:0o666,//权限位
    start:0,//读取的起始索引
    end:6,//读取的终止索引（包括结束索引，一般不包括截止索引的，这是个例外）
    encoding:"utf8"//制定读取的格式
})
/**
 * 如果读取的是文件流
 */
rs.on('open',function(){
    console.log("文件打开")
})
/**
 * 制定读取的格式
 */
rs.setEncoding('utf8')
/**
 * 监听data事件，这样可读流就可以读出文件的数据了
 * 默认情况下，不停的读取数据，触发data事件
 * 但是可以暂停/恢复读取流
 * pause/resume
 */
rs.on('data',function(data){
    console.log(data)
    rs.pause();
    setTimeout(function(){
        rs.resume()
    },2000)
    /**
     *  <Buffer 31 32 33>
        <Buffer 34 35 36>
        <Buffer 37 38 39>
        <Buffer 30>
     */
})

/**
 * 
 */


/**
 * 如果读取文件出错，触发
 */
rs.on('error',function(){
    console.log("出错了")
})


/**
 * 读取文件完成，触发
 */
rs.on('end',function(){
    console.log("读完了！")
})
/**
 * 文件关闭
 */
rs.on('close',function(){
    console.log("文件关闭")
})


