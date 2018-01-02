const fs=require('fs');
const path=require('path');
let jsArray=[];
/* 遍历目录 */
function travel(dir,callback){
 /*  let dirs=fs.readdirSync(dir);
  console.log(dirs) */
  fs.readdirSync(dir).forEach(function(file){
      let pathname=path.join(dir,file)
      /*   fs.statSync返回一个stats实例 ，有以下方法：
            stats.isFile()
            stats.isDirectory()
            stats.isBlockDevice()
            stats.isCharacterDevice()
            stats.isSymbolicLink() (仅对 fs.lstat() 有效)
            stats.isFIFO()
            stats.isSocket() 
    */
  /*    let status=fs.statSync(pathname);
     console.log(status) */
     if(fs.statSync(pathname).isDirectory()){
         travel(pathname,callback)

     }else{
         callback(pathname)
     }
  })
};
let path_new="/Users/wujian/Documents/github/nodejs/test";
const consoleFun=function(pathname){
    console.log(pathname);
    if(path.extname(pathname)==".js"){
        jsArray.push(pathname)
    }
}
travel(path_new,consoleFun)
console.log(jsArray)
