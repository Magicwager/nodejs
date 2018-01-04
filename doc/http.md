### HTTP
HTTP全称是超文本协议。它构建在TCP之上，属于应用层协议，在HTTP的两端是服务器和浏览器，即著名的B/S模式。
在Node 中构建HTTP服务很简单，代码如下：

```
const http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World!')
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337')
```

