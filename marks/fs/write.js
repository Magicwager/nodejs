let fs =require("fs");
let data = {
    "name":"wager",
    "age":30
}
fs.writeFile('./2.txt',JSON.stringify(data),{encoding:"utf8"},function(err){
    console.log(err)
})
let data2= Object.assign({},data,{"say":"hello"})
console.log(data2)
/**
 * 追加写入
 */
fs.writeFile('./2.txt',JSON.stringify(data2),{encoding:"utf8",flag:"a"},function(err){
    console.log(err)
})

/** 
 * 追加写入
 */
fs.appendFile('./2.txt',JSON.stringify(data2),function(err){

})

