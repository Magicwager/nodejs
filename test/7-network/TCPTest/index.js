/* 创建TCP服务端来接收网络请求 */
const net=require('net');
let server=net.createServer(function(socket){
    socket.on('data',function(data){
        console.log(data.toString())
        socket.write("hello")
    });
    socket.on('end',function(){
        console.log("连接断开")
    });
    socket.write("welcome to my TCP server:\n")
});
server.listen(8124,function(){
    console.log('server bound')
})