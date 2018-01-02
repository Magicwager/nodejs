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

