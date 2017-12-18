# nodejs
### 什么是nodejs

JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。

运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。

### 安装node

1.mac：

建议使用brew安装。brew 全称Homebrew  是Mac OSX上的软件包管理工具Homebrew 安装和卸载工具 只用一行命令就能完成
因为mac 自带ruby ，所以只需要执行

```
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"  

```
安装完可以通过`brew -v`	检查是否安装成功。

然后安装node，只需执行`brew install node`即可。

2.windows：

可以去官网[https://nodejs.org]()选择和系统版本匹配的.msi后缀的安装文件

### 如何运行
1.直接运行js代码：
首先输入`node`进入命令交互模式，然后就可以像浏览器里头的控制台一样输入js代码，例如：

```
$ node
> console.log('Hello World!');
Hello World!

```

若想退出交互模式，则两次`control+c`活着输入`.exit`

2.运行文件：
例如执行在test目录下的hello.js

```
node ./test/hello.js

```

### 模块机制
在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

1.require

require就是用来加载模块的一个函数，可以通过传入模块名来加载模块，因为文件路径就是模块名，所以可以穿入相对路径或者绝对路径来加载模块。另外，以`.js`为扩展名的可以省略扩展名。

另外可以用require引入json文件，例如本项目中的	./test/hellojson.js中：

```
var helloData=require('./json/hello.json');
function hello() {
    console.log(helloData.helloCont);
}
hello();
```

可以引入到./test/json／hello.json,并获取里头的数据。

2.exports

exports对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过require函数使用当前模块时得到的就是当前模块的exports对象。例如本项目中./test/helloExport.js：

```
exports.hello=function(){
    console.log("Hello node!")
}
```

对外提供一个对象，对象里头有hello方法，然后通过./test/exportTest.js调用：

```
var helloExport=require('./helloExport');
helloExport.hello()
```

3.module	
通过module对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式：

例如./test/helloModule.js：


```
module.exports=function(){
    console.log("Hello node!")
}
```

然后通过./test/moduleTest.js调用：

```
var hello=require('./helloModule');
hello()

```

这里不像exports默认导出对象那样，需要通过找到对象的属性去调用，这里直接导出的是一个方法。
