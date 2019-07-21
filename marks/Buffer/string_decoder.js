/**
 * string_decoder
 * 是一个全局模块
 * 为了解决buffer不全乱码输出情况
 * 里头有个write方法用来输出buffer内容，输出机制为：
 * 先判断是不是一个字符，如果是的话就输出该字符，不是则缓存
 * 在对象内部，等下次再write的时候会被前面缓存的buffer加到第二次write的buffer再判断
 */
//不用string_decoder模块进行输出时
 let buf = Buffer.from("朋友你好")
 let buf1 = buf.slice(0,5);//5个字节，前三个字节组成为朋，多了两个字节乱码
 let buf2 = buf.slice(5,12)//7个字节
console.log(buf1.toString())//朋？
console.log(buf2.toString())//？你好


//利用string_decoder模块进行输出时
let string_decoder = require("string_decoder");
//认识string_decoder
console.log(string_decoder)
/**
 * { StringDecoder: [Function: StringDecoder] }
 * 对外暴露一个对象
 */
let {StringDecoder} = string_decoder
let sd = new StringDecoder();
console.log(sd.write(buf1))//朋
console.log(sd.write(buf2))//友你好