let fs = require('fs')
let path = require('path')

/**
 * 同步深度先序遍历
 * @param {*} dirs 
 */
function deepPreOrder(dirs){
    console.log(dirs)
    let files = fs.readdirSync(dirs);
    files.length>0 && files.forEach(file=>{
        let filePath = path.join(dirs,file)
        let stat = fs.statSync(filePath)
        if(stat.isDirectory()){
            deepPreOrder(filePath)
        }else{
            console.log(filePath)
        }
    })
}
//  deep_pre deep_pre/deep_pre2 deep_pre/deep_pre2/deep_pre3 deep_pre/deep_pre2/deep_pre3.js  deep_pre/deep_pre2-2 deep_pre/deep_pre2.js
deepPreOrder('deep_pre')