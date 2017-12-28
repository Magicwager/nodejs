const fs=require('fs');
const rs=fs.createReadStream("../hello.js");
const doSomething=function(chunk,callback){
    console.log(chunk)
    callback()
}
/* rs.on("data",function(chunk){
    console.log(chunk)
})
rs.on("end",function(){
  console.log("ok")
}) */
rs.on('data', function (chunk) {
    rs.pause();
    doSomething(chunk, function () {
        rs.resume();
    });
});