let concat = require("./concat.js")
console.log(concat)
let bu9 = Buffer.from("朋友你好")
let buf10 = bu9.slice(0,5);//5个字节，前三个字节组成为朋，多了两个字节乱码
let buf11 = bu9.slice(5,12)//7个字节
let concatBuf = concat([buf10,buf11],5)
console.log(concatBuf,concatBuf.toString())//朋友你好