let say = require("./moduleB.js");
let content = require("./moduleA.js")
let person = {
    name:"wager",
    age:"29",
    content:content,
    action:say
}
console.log(Object.keys(module))

module.exports=person