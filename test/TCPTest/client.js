const net = require('net');
let client = net.connect({port:8124},function(){
    console.log('client connectted');
    client.write('world!')
})
client.on('data',function(data){
    console.log(data.toString());
    client.end()
})
client.on('end',function(){
    console.log('client disconnectted')
})