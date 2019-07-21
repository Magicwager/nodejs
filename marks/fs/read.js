/**
 * 
 */
let fs =require("fs");
fs.readFile('./1.json',function(err,data){
    if(err){
        console.log(err)//如果读取失败
    }else{
        console.log(data)//默认输出buffer
    }
})
//可以加参数
fs.readFile('./1.json',{encoding:"utf-8"},function(err,data){
    if(err){
        console.log(err)//如果读取失败
    }else{
        console.log(data)//输出字符
    }
})

