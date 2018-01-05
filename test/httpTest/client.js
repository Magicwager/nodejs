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