/* 构造二进制数据 */
var Bdata=new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(Bdata);
console.log(Bdata.length);
console.log(Bdata[0]+","+Bdata[1]);
/* 二进制转字符串 */
var Sdata=Bdata.toString('utf-8');
console.log(Sdata);
/* 字符串转二进制 */
var Bdata2=new Buffer("hello","utf-8");
console.log(Bdata2);
/* 修改二进制数据 */
Bdata2[0]=0x6c;
console.log(Bdata2);
console.log(Bdata2.toString('utf-8'));
/*  */
var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
var sub = bin.slice(2);
console.log(sub)

sub[0] = 0x65;
console.log(bin); // => <Buffer 68 65 65 6c 6f>