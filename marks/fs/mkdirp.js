 /**
  * 异步递归创建级联目录
  * @param {*} path 
  */
 function mkdirp(path){
    let pathArr = path.split('/')
    !function next(index){
        //fs.constants.R_OK读取权限，如果目录不存在，则会抛出目录不存在错误
        let currentPath = pathArr.slice(0,index).join("/")
        fs.access(currentPath,fs.constants.R_OK,function(err){
            if(index > pathArr.length) return;
            if(err){
                fs.mkdir(currentPath,function(err){
                    next(index+1)
                })
            }else{
                next(index+1)
            }
        })
    }(1)
 }
 /**
  * 同步递归创建级联目录
  * @param {删除的文件目录} path 
  */
 function mkdirpSync(path){

 }
 mkdirp('dir_test/dir_test1/dir_test2')