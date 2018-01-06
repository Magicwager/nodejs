### HTTP
HTTP全称是超文本协议。它构建在TCP之上，属于应用层协议，在HTTP的两端是服务器和浏览器，即著名的B/S模式。在Node中，HTTP服务继承自TCP服务器（net模块），他能够与多个客户端保持连接，由于采用事件驱动的形式，并不为每一个连接创建额外的线程或进程，保持很低的内存占用，所以能实现高并发。


在Node 中构建HTTP服务很简单，代码如下：

```
const http=require('http');
http.createServer(function(req,res){
    const body=[]
 	 console.log(req.method);
    console.log(req.headers);//request对象访问
    req.on('data', function (chunk) {
        body.push(chunk);
    });//只读流方式
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!')
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337')
```


每当来了一个客户端请求，创建服务器时传入的回调函数就被调用一次。可以看出，这是一种事件机制。
在回调函数中，除了可以使用request对象访问请求头数据外，还能把request对象当作一个只读数据流来访问请求体数据。
为了发起一个客户端HTTP请求，我们需要指定目标服务器的位置并发送请求头和请求体，以下示例演示了具体做法。

```
const http =require('http');
const options ={
    hostname:'127.0.0.1',
    port:1337,
    path:'/',
    method:'GET'
}
let req = http.request(options,function(res){
    console.log('STATUS:'+ res.statusCode);
    console.log('HEAD:'+JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log(chunk);
    })
})
req.end();
```
可以看到，.request方法创建了一个客户端，并指定请求目标和请求头数据。之后，就可以把request对象当作一个只写数据流来写入请求体数据和结束请求。

