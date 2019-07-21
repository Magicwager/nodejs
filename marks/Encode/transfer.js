/**
 * 进制的转换
 * 二进制0b开头
 * 八进制0o开头
 * 十六进制0x开头
 */
//二进制
let a = 0b10010
console.log(a);
//八进制
let b = 0o22
console.log(b);
//十进制
let c = 18;
console.log(c);
//十六进制
let d = 0x12;
console.log(d);

//任意转十进制 parseInt有问题
console.log(parseInt("0o22",8))//预期不对
console.log(parseInt("0x12",16))
//十进制转任意
console.log(c.toString(2))//转2
console.log(c.toString(8))//转8
console.log(c.toString(16))//转16

console.log((2**11-1).toString(16))