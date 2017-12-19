# nodejs
###什么是nodejs

JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。

运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。

###安装node

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

###如何运行



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

###模块机制
在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

**1.require**

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

**2.exports**

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

**3.module**	
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

**注意：一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。**
###模块路径解析规则

前面介绍的可以通过相对路径与绝对路径两种路径找到模块，但是这两种方法在模块之间建立了强耦合关系，一旦某个模块文件的存放位置需要变更，使用该模块的其它模块的代码也需要跟着调整，变得牵一发动全身。

因此，require函数支持第三种形式的路径，并依次按照以下规则解析路径，直到找到模块位置。


**1.内置模块**

如果传递给require函数的是NodeJS内置模块名称，不做路径解析，直接返回内部模块的导出对象，例如`require('fs')`。

**2.node_modules目录**

NodeJS定义了一个特殊的node_modules目录用于存放模块。例如如果在绝对路径／home/test/hello.js中以`require('foo/bar')`方式加载模块，则NodeJS依次尝试使用以下路径去寻找模块：

```
/home/test/node_modules/foo/bar
 /home/node_modules/foo/bar
 /node_modules/foo/bar
```

**3.NODE_PATH环境变量**

NodeJS允许通过**NODE_PATH**环境变量来指定额外的模块搜索路径。**NODE_PATH**环境变量中包含一到多个目录路径，路径之间在Linux下使用`:`分隔，在Windows下使用`;`分隔。

例如定义了以下**NODE_PATH**环境变量：

` NODE_PATH=/home/user/lib:/home/lib`


当使用`require('foo/bar')`的方式加载模块时，则NodeJS依次尝试以下路径。

```
 /home/user/lib/foo/bar
 /home/lib/foo/bar
```

### 包（package）
由多个子模块组成的大模块称做包，并把所有子模块放在同一个目录里。
在所有的子模块中有一个入口模块，这个入口子模块将包里的其他子模块都串联起来，并且向外导出一个对象，这个对象也是这个包的导出对象。

使用这个包时只需要引入这个包的入口模块，一半入口模块都命名为`index.js`，因为引用该包的时候，路径只需到包的位置，而不用到入口模块的位置。例如目录结构如下：

```
├── hello
│   ├── index.js
│   └── modules
│       ├── actions.js
│       ├── object.js
│       └── subject.js
└── test.js

```

其中`hello`是一个包，里头包括`index.js`,`actions.js`,`object.js`,`subject.js`四个模块，其中`index.js`为入口模块。`test.js`为测试该包，如下：

```
var hello=require('./hello');
hello();

```
这样感觉上整个hello目录被当作单个模块使用，更有整体感。






