/**
 * 实现一个方法，复制一个文件（肯定是注意不要一次写入的）
 * 节约内存，读一点写一点
 */
let fs = require("fs")
function copy(src,target){
    let BUFFER_SIZE = 3
    fs.open(src,'r',0o666,function(err,fdRead){
        fs.open(target,'w',0o666,function(err,fdWrite){
            let bufferRead = Buffer.alloc(BUFFER_SIZE);
           /*  let writeFile = function(){
                fs.read(fdRead,bufferRead,0,BUFFER_SIZE,null,function(err,bytesRead,buffer){
                    console.log(bytesRead)
                    if(bytesRead>0){
                        fs.write(fdWrite,buffer,0,bytesRead,null,writeFile)
                    } 
                })
            }
            writeFile() */
            //递归可以这么写
            !function writeFile(){
                fs.read(fdRead,bufferRead,0,BUFFER_SIZE,null,function(err,bytesRead,buffer){
                    console.log(bytesRead)
                    if(bytesRead>0){
                        fs.write(fdWrite,buffer,0,bytesRead,null,writeFile)
                    } else{
                        //如果没有了就关闭文件，因为打开文件数肯定是有限的，而且fsync强行把缓存区的数据写入文件
                        fs.fsync(fdWrite,function(err){
                            fs.close(fdWrite,function(){
                                console.log(`复制成功，关闭${target}文件成功`)
                            })
                        })
                    }
                })
            }()
        })
    })
}
copy("./3.txt","./3_copy.txt")