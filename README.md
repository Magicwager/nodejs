
# nodejs

**说明：此项目从nodejs最基础的概念出发，一步步的小示例介绍了nodejs最基础的规则，然后通过编写完整的一个包并发布npm，成为可以共享的npm包。这样对于初学者循序渐进的入门nodejs。**

### 示例项目结构

```
├── README.md
├── bin			存放命令行相关代码
│   └── echo.js
├── doc			存放相关文档
│   ├── nodejs简介.md
│   ├── node模块机制.md
│   ├── 包简介.md
│   └── 命令行程序.md
├── lib			存放相关API相关代码			
│   └── msgEcho.js
├── package-lock.json
├── package.json
└── test			测试目录，包括此项目文档中的对应的Demo
    ├── commandLineTest
    ├── exportsTest
    ├── hello.js
    ├── json
    ├── moduleTest
    ├── packageTest
    └── requireTest
```

具体文档可以参考项目中的文档。


[nodejs简介](https://github.com/Magicwager/nodejs/blob/master/doc/nodejs%E7%AE%80%E4%BB%8B.md)

[node模块机制](https://github.com/Magicwager/nodejs/blob/master/doc/node%E6%A8%A1%E5%9D%97%E6%9C%BA%E5%88%B6.md)

[包简介](https://github.com/Magicwager/nodejs/blob/master/doc/%E5%8C%85%E7%AE%80%E4%BB%8B.md)

[命令行程序](https://github.com/Magicwager/nodejs/blob/master/doc/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A8%8B%E5%BA%8F.md)

注意：如果发布了一个包，要想更新，则应该升版本。然后如果本地是使用命令行的话，再用的时候则应该`npm install [module] -g`更新全局变量，如果只是其他包局部依赖此包，则`npm update`即可。









