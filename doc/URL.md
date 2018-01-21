### URL
该模块允许解析URL、生成URL，以及拼接URL，一个完整的url包括以下：

```
                           href
 -----------------------------------------------------------------
                            host              path
                      --------------- ----------------------------
 http: // user:pass @ host.com : 8080 /p/a/t/h ?query=string #hash
 -----    ---------   --------   ---- -------- ------------- -----
protocol     auth     hostname   port pathname     search     hash
                                                ------------
                                                   query
```

常用的方法：

`url.parse(url)`将url字符串转换一个url对象，

```
url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
/* =>
{ protocol: 'http:',
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/
```
`url.format(urlObj)`将url对象转换一个url字符串。

```
url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
/* =>
'http://www.example.com/p/a/t/h?query=string'
*/
```

`url.resolve()`拼接url

```
const url = require('url');
const urladd='http://www.baidu.com/img/sin.png';
const urladd2='../cos.png';
const urladd3='./cos.png';
let urlNew=url.resolve(urladd,urladd2);
let urlNew2=url.resolve(urladd,urladd3)
console.log(urlNew);=>http://www.baidu.com/cos.png
console.log(urlNew2)=>http://www.baidu.com/img/cos.png
```
