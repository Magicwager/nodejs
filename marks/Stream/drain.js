/**
 * 如果调用 stream.write(chunk) 返回 false，则当可以继续写入数据到流时会触发 'drain' 事件
 * 
 */

let fs = require("fs")
let ws = fs.createWriteStream("drain.txt", {
    highWaterMark: 3
})
function writeDrain(writable, data, encoding, callback) {
    let i = 10
    let ok = true
    console.log()
    let write = function () {
        do {
            i--;
            console.log(i)
            if (i === 0) {
                //写完了，调用回调函数
                writable.write(data, encoding, callback)
            } else {
                //未写完，判断缓存区是否满，满了会返回false
                ok = writable.write(data, encoding)
                if (ok === false) {
                    console.log("写入失败了")
                }
            }
        } while (i > 0 && ok)//得是未写完并且可写入才执行
    }
    writable.on("drain", write)//定义了drain方法，缓存区满了然后
    write()
}
writeDrain(ws, "1", "utf8", function () {
    console.log("写入完成")
})



