const https = require('https');
const fs = require('fs');
const options = {
    key: fs.readFileSync('./TSL_SSL/server.key'),//私钥
    cert: fs.readFileSync('./TSL_SSL/server.crt')//公钥
};

const server = https.createServer(options, function (req, res) {
    console.log(req);
    console.log(res);
    res.writeHead(200);
    res.end("hello world")

}).listen(8000);
