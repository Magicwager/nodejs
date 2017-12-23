# nodejs
###  什么是nodejs

JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。

运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。

###  安装node

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

###  如何运行



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