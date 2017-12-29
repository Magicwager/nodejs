### stream (数据流)

当内存无法一次性装下需要处理的数据活着，想要一边读取数据一边处理数据时（提高效率），我们就需要数据流。

例如拷贝一个大文件时，我们不能一次性读写大的数据，因为这样会内存爆仓。为了高效而安全的处理，我们就用到数据流了。如下：

```
onst fs=require('fs');
const rs=fs.createReadStream("../hello.js");
rs.on("data",function(chunk){
    console.log(chunk)
})
rs.on("end",function(){
  console.log("ok")
})

```

这里用了一个data事件，并且随着数据片段（chunk）会源源不断的触发。这会有一个问题，`data`事件会源源不断出发，不管里头的处理事件（在这里知识一个console.log（）事件）能不能处理过来。那我们可以进行改造一下，如下：

```
const fs=require('fs');
const rs=fs.createReadStream("../hello.js");
const doSomething=function(chunk,callback){
    console.log(chunk)
    callback()
}
/* 这种方式 是检测到有数据流过来时就会出发data事件，不管回调里头的能不能处理的过来。于是有改造*/
/* rs.on("data",function(chunk){
    console.log(chunk)
})
rs.on("end",function(){
  console.log("ok")
}) */
/* 改造后的方式，这里来一个数据流就处理一个数据流，等处理完了再恢复读取数据 */
rs.on('data', function (chunk) {
    rs.pause();
    doSomething(chunk, function () {
        rs.resume();
    });
});
```

这样的话可以在处理数据前暂停数据读取，并在处理数据后继续读取数据。