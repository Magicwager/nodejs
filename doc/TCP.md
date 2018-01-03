### TCP 服务
TCP全名为传输控制层，许多应用层协议基于TCP构建，典型的事HTTP、IMAP等。
在了解TCP之前可以先看一个例子，创建一个TCP服务器来接收网络请求。代码如下：


```
/* 创建TCP服务端来接收网络请求 */
const net=require('net');
let server=net.createServer(function(socket){
    socket.on('data',function(data){
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
```
在这里监听了本地的8124端口。通过node运行该脚本，则会启动服务。


然后可以利用Telnet工具作为客户端对这个服务进行会话，新开一个控制台，然后输入`telnet 127.0.0.1 8124`,则成功形成会话，如下所示：

```
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
welcome to my TCP server:

```

然后可以输入任意信息，服务器会返回“hello”,这是在socket接收信息后的返回信息。


**tips：如何退出telnet客户端呢？--先ctrl+] 然后输入quit，这样TCP服务端也会显示“连接断开”的提示**

也可以通过net模块自行构建客户端进行会话，测试上述服务器的代码如下：

```
const net = require('net');
let client = net.connect({port:8124},function(){
    console.log('client connectted');
    client.write('world!')//发送数据
})
client.on('data',function(data){
    console.log(data.toString());//接收的数据
    client.end()
})
client.on('end',function(){
    console.log('client disconnectted')
})
```

这里连接了8124端口，并通过‘data’事件，将服务器返回的信息输出出来，并做了断开连接的操作。结果如下：


```
client connectted
welcome to my TCP server:
hello
client disconnectted
```


