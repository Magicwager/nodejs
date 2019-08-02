


let fs = require("fs")
let path = require("path")


function rmdirp(dirs) {
    !function next(dir) {
        fs.readdir(dir, function (err,files) {
            if(files.length==0){
                !function next_rm(dirPath){
                    fs.rmdir(dirPath,function(err){
                        console.log(dirPath)
                        if(path.dirname(dirPath)==dirs){
                            fs.rmdir(dirs,function(err){
                                console.log(err)
                            })
                        }else{
                            next_rm(path.dirname(dirPath))
                        }
                     
                    })
                }(dir)      
            }
            files.map(file=>{
                let filePath = path.join(dir,file)
                fs.stat(filePath,function(err,stats){
                    if(stats.isFile()){
                        fs.unlink(filePath,function(err){
                            
                        })
                    }else{
                        next(`${dir}/${file}`)
                    }
                })
            })
           
        })
    }(dirs)
}

rmdirp("dir_test")
/* fs.rmdir("dir_test/dir_test1/dir_test2",function(err){
    console.log(err)
}) */