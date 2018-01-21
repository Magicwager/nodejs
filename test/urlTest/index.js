const url = require('url');
const urladd='http://www.baidu.com/img/sin.png';
const urladd2='../cos.png';
const urladd3='./cos.png';
let urlNew=url.resolve(urladd,urladd2);
let urlNew2=url.resolve(urladd,urladd3)
console.log(urlNew);
console.log(urlNew2)