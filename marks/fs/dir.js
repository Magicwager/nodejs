/**
 * 创建目录
 */
//创建目录前提是父目录存在
 let fs = require("fs")
 fs.mkdir('dir_test',function(err){
     console.log(err)
 })
//判断一个文件目录是否存在
 fs.access('dir_test',fs.constants.R_OK,function(err){
    console.log(err)
 })
 console.log(fs.constants.R_OK)

 