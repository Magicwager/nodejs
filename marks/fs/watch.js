/**
 * 监控文件的变化，文件变化后执行回调
 */
let fs = require('fs')
//stat 是一个fs.stat对象
fs.watchFile('dir.js',function(newStat,prevStat){
    if(Date.parse(prevStat.ctime)==0){
        console.log(`新增文件`)
    }else if(Date.parse(prevStat.ctime)!=Date.parse(newStat.ctime)){
        console.log(`修改文件`)
    }else{
        console.log(Date.parse(newStat.ctime))
    }
})