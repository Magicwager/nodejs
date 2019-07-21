/**
 * 实现Buffer的concat方法
 * @ bufferArr 需要链接的buffer数组
 * @ bufferTotal 连接的buffer长度，不传则默认为连接buffer数组总长度
 */
concat = function(bufferArr,bufferTotal=bufferArr.reduce((len,buffer)=>len+buffer.length,0)){
    if(bufferArr.length==1){
        return bufferArr[0]
    }
    let result = Buffer.alloc(bufferTotal)
    let index = 0;
    bufferArr.map(buffer=>{
        buffer.map(bite=>{
            if(index>=bufferTotal){
                return result
            }else{
                result[index++]=bite
            }
        })
    })
    return result

}
module.exports=concat