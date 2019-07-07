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