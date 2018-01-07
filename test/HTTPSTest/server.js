const https = require('https');
const fs = require('fs');
const options = {
    key: fs.readFileSync('./TSL_SSL/server.key'),//私钥
    cert: fs.readFileSync('./TSL_SSL/server.crt')//公钥
};

const server = https.createServer(options, function (request, response) {
    console.log(request);
    console.log(response)
});