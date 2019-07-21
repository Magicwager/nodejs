/**
 * 分配buffer的方式
 * Buffer内是十六进制表示的
 */
//分配一块初始化的内存,第二个参数位初始化值，应到小于
let buf1 = Buffer.alloc(6,0);
console.log(buf1);//<Buffer 00 00 00 00 00 00>
//分配一块没有初始化的内存，这样不安全，因为这个可能会带有一些数据
let buf2 = Buffer.allocUnsafe(6);
console.log(buf2)//为任意不固定内容6个字节的buffer
//以一定内容获取一块内存
let buf3 = Buffer.from("你好");
console.log(buf3)//固定的“你好”对于内容的buffer<Buffer e4 bd a0 e5 a5 bd>
let bufStr = Buffer.from("hello my friend")
console.log(bufStr)
/**
 * 常用方法
 */
/**
 * fill
 * 1.填充的值
 * 2.填充的开始索引
 * 3.填充的结束索引(填充不包括结束索引，一般的范围都是不包括结束位置的)
 */
 buf1.fill(3,0,3)//<Buffer 00 03 03 00 00 00>
console.log(buf1)

/**
 * toString
 * buffer转字符
 */
console.log(buf1.toString())

/**
 * write
 * 1写的字符串
 * 2填充的开始索引
 * 3填充的字节长度
 * 4编码方式
 */
buf1.write("你",0,3,'utf8')
buf1.write("好",3,3,'utf8')
console.log(buf1)
console.log(buf1.toString())

/**
 * writeInt8等
 * 向指定索引写入一个8位的整数，也就是一个字节的整数
 */
let buf4 = Buffer.alloc(6)
buf4.writeInt8(0,0);//0
buf4.writeInt8(16,1);//10
buf4.writeInt8(32,2);//20
console.log(buf4)//<Buffer 00 10 20 00 00 00>

/**
 * writeInt16BE//字节序 高位在前 Big Endian
 * readInt16BE
 * writeInt16LE //字节序 低位在前 Little Endian
 * readInt16LE
 * 1.写入的整数
 * 2.索引
 * 
 */
let buf5 = Buffer.alloc(6)
//01 00 高位在前
buf5.writeInt16BE(256,0);//向索引为0的写入256,占两个字节（方法名可知道是16位，因为16占两个字节）
console.log(buf5)//<Buffer 01 00 00 00 00 00>
console.log(buf5.readInt16BE(0))//256
//00 10 低位在前
let buf6 = Buffer.alloc(6)
buf6.writeInt16LE(256,0)
console.log(buf6)//<Buffer 00 01 00 00 00 00>
console.log(buf6.readInt16LE(0))//256

//怎么存的，就怎么读，即高位存就高位读，低位存就低位读

/**
 * slice，截取buffer
 * 浅拷贝
 */
let buf7 = Buffer.alloc(6,1)//<Buffer 01 01 01 01 01 01>
let buf8 = buf7.slice(2,6)
console.log(buf8)//<Buffer 01 01 01 01>
//浅拷贝，buf8变了，buf7那块也得变
buf8.write("你",0,3,"utf8")
console.log(buf8,buf7)//<Buffer e4 bd a0 01> <Buffer 01 01 e4 bd a0 01>

/**
 * concat 连接buffer
 */
let bu9 = Buffer.from("朋友你好")
let buf10 = bu9.slice(0,5);//5个字节，前三个字节组成为朋，多了两个字节乱码
let buf11 = bu9.slice(5,12)//7个字节
let concatBuf = Buffer.concat([buf10,buf11])
console.log(concatBuf.toString())//朋友你好

