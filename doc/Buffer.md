###  Buffer(数据块)

JS里头是没有二进制数据类型的，但是在NodeJs里头提供了一个全局构造函数来提供对二进制数据的操作，它就是Buffer。

Buffer既可以读取二进制数据，也可以制造二进制数据，如下：

`var Bdata=new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ])`

Buffer与字符串类似，除了可以用`.length`属性得到字节长度外，还可以用`[index]`方式读取指定位置的字节，例如：

```

var Bdata=new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(Bdata);
console.log(Bdata.length);
console.log(Bdata[0]+","+Bdata[1])

```

输出：

```
<Buffer 68 65 6c 6c 6f>
5
104,101

```

`Buffer`与字符串能够互相转化，例如可以使用指定编码将二进制数据转化为字符串：

```

var Sdata=Bdata.toString('utf-8');
console.log(Sdata)//输出'hello'

```

或者反过来，将字符串转换为指定编码下的二进制数据：

```
var Bdata2=new Buffer("hello","utf-8");
console.log(Bdata2)//输出<Buffer 68 65 6c 6c 6f>
```

**Buffer与字符串操作的区别**

字符串是只读的，如果对字符串修改，则得到的都是一个新字符串，原字符串保持不变。


至于`Buffer`，更像是可以做指针操作的C语言数组。例如，可以用`[index]`方式直接修改某个位置的字节。例如：


```
Bdata2[0]=0x6c;
console.log(Bdata2);
console.log(Bdata2.toString('utf-8'));//输出lello

```







