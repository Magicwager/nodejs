let content = require("./moduleA.js")
function say(){
    console.log(content)
}
console.log("moduleB")
module.exports=say