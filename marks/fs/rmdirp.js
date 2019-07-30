
/**
 * 异步递归删除一个非空目录
 */

 let fs = require("fs")
 let path = require("path")
function rmdirpSync(dir){
    let files=fs.readdirSync(dir);
    files.map((file)=>{
        let childPath = path.join(dir,file)
        let child = fs.statSync(childPath)
        if(child.isDirectory()){
            rmdirpSync(childPath)
        }else{
            fs.unlinkSync(childPath)
        }
    })
    fs.rmdirSync(dir)
}
//rmdirpSync ("dir_test")
fs.rmdirSync("dir_test/dir_test1/dir_test2")