### HTTPS
https模块与http模块极为类似，区别在于https模块需要额外处理SSL证书。
##### 密钥
每个服务器端和客户端都有自己的公私钥（TSL／SSL），公钥用来加密要传输的数据，私钥用来解密接收到的数据，他们是配对的。

Node 在底层采用的是openssl实现TSL／SSL的，因此可以通过openssl生成私钥和公钥，生成私钥如下：

```
openssl genrsa -out server.key 1024
openssl genrsa -out client.key 1024
```

然后再由它们生成公钥如下：

```
openssl rsa -in server.key -pubout -out server.pem
openssl rsa -in client.key -pubout -out client.pem

```
生成的公私钥文件如下：

```
├── TSL_SSL
│   ├── client.key
│   ├── client.pem
│   ├── server.key
│   └── server.pem
├── client.js
└── server.js
```

公私钥的非对称加密虽好，但是网络中依然可能存在窃听的情况，典型的例子是中间人攻击。为了解决这个问题，TLS／SSL引入了数字证书进行认证。

为了得到签名证书，服务器需要通过自己的私钥生成CSR（证书签名请求）文件，然后CA（数字证书认证中心）会通过此文件颁发属于该服务器的签名证书。但是此过程是非常繁琐和耗费费用的，多半可以采用自签名证书来构建安全网络。所谓自签名证书，就是自己扮演CA机构。
生成自签名证书的过程：

```
openssl genrsa -out server.key 1024
openssl req -new -key server.key -out server.csr 
openssl x509 -req -in server.csr -signkey server.key -out server.crt
```
生成玩公私钥后可以在服务端，创建一个HTTPS服务器如下：

```
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


```
启动之后可以用curl 工具测试：

```
curl https://localhost:8000
```
由于是自签名的证书，curl工具无法验证服务器端证书是否正确，所以会出现如下抛错：

```
curl: (60) SSL certificate problem: Invalid certificate chain
More details here: https://curl.haxx.se/docs/sslcerts.html

curl performs SSL certificate verification by default, using a "bundle"
 of Certificate Authority (CA) public keys (CA certs). If the default
 bundle file isn't adequate, you can specify an alternate file
 using the --cacert option.
If this HTTPS server uses a certificate signed by a CA represented in
 the bundle, the certificate verification probably failed due to a
 problem with the certificate (it might be expired, or the name might
 not match the domain name in the URL).
If you'd like to turn off curl's verification of the certificate, use
 the -k (or --insecure) option.
```
