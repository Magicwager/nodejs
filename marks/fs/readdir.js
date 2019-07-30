let fs = require("fs")
let path = require("path")
function readdir(dirs){
    let pathArr = []
    !function next(dir){
        //console.log(dir)
        fs.readdir(dir,function(err,files){
            //console.log(files)
            if(!files)return;
            //console.log(files)
            files.map((file)=>{
                let filePath = path.join(dir,file)
                //console.log(filePath)
                fs.stat(filePath,function(err,stats){
                    if(stats.isFile()){
                        pathArr.push(file)
                        console.log(pathArr)
                    }else{
                        //console.log(file)
                        next(`${dir}/${file}`)
                    }
                })
            })
        })
    }(dirs)  
}
readdir("readdir")