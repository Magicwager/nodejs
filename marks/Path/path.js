let path = require('path')
/**
 * 文件路径解析
 * 从当前路径出发，解析出一个绝对路径
 */
console.log(__filename)
console.log(path.resolve("..",".","fs"))
/**
 * 文件分隔符
 */
console.log(path.sep);
console.log(path.win32.sep)
console.log(path.posix.sep)

/**
 * basename获取文件名
 */
console.log(path.basename("path.js",".js"))
/**
 * 环境变量路径分隔符
 */
console.log(path.delimiter)//:
console.log(path.win32.delimiter)//;
console.log(path.posix.delimiter)//: