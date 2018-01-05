### HTTP
HTTP全称是超文本协议。它构建在TCP之上，属于应用层协议，在HTTP的两端是服务器和浏览器，即著名的B/S模式。在Node中，HTTP服务继承自TCP服务器（net模块），他能够与多个客户端保持连接，由于采用事件驱动的形式，并不为每一个连接创建额外的线程或进程，保持很低的内存占用，所以能实现高并发。


在Node 中构建HTTP服务很简单，代码如下：

```
const http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!')
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337')
```

