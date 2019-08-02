let fs = require("fs")
let path = require("path")
/**
 * 同步递归删除一个非空目录
 * @param {*} dir 
 */
function rmdirpSync(dir) {
    let files = fs.readdirSync(dir);
    files.map((file) => {
        let childPath = path.join(dir, file)
        let child = fs.statSync(childPath)
        if (child.isDirectory()) {
            rmdirpSync(childPath)
        } else {
            fs.unlinkSync(childPath)
        }
    })
    fs.rmdirSync(dir)//同步删除空目录
}
rmdirpSync("dir_test")