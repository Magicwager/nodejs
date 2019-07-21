/**
 * 实现汉字unicode转utf-8
 * utf-8中，汉字为三个字节
 */
function utf8Transfer(unicode){
    //因为unicode是十六进制的，而它的二进制码是utf-8规则以外剩余二进制位的顺序组合，所以先将unicode转成二进制码
    let unicode_binary = unicode.toString(2);
    console.log("unicode二进制码:"+unicode_binary)
    //然后根据三个字节表示一个字符的规则，确定三个字节的开头
    let arr = ["1110","10","10"]
    //然后拆unicode的二进制码组装到各个字节中
    //第三个字节以10开头，差6个二进制位,这个6个从unicode的二进制码后六位补过来（因为是按顺序的）
    arr[2] = arr[2]+unicode_binary.slice(unicode_binary.length-6)
    //第二个字节以10开头，差6个二进制位,这个6个从unicode的二进制码的倒数六位到倒数12位补过来
    arr[1] = arr[1]+unicode_binary.slice(unicode_binary.length-12,unicode_binary.length-6)
    //第一个字节以1110开头，差4个二进制位，这4个从unicode的二进制码剩下的不全，不够的在前面补0
    arr[0] = arr[0]+unicode_binary.slice(0,unicode_binary.length-12).padStart(4,'0')
    return arr;
}
//例如万对应的Unicode为4E07
let t = utf8Transfer(0x4E07)
console.log("utf-8:"+t)


