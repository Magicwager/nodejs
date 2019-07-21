/**
 * module有实现缓存，如果模块第一次被加载后被缓存，再次加载会从缓存中取
 * moduleC依赖B，A，moduleB依赖A，加载过程中，moduleA只加载了一次
 */
let person = require("./moduleC.js")
console.log(person)

console.log(Object.keys(require.cache))
/**
 * 缓存的是绝对路径，所以只要某个模块加载过被缓存，其他模块再加载就走缓存了
 * [ '/Users/wujian/Documents/github/nodejs/marks/Module/module.js',
  '/Users/wujian/Documents/github/nodejs/marks/Module/moduleC.js',
  '/Users/wujian/Documents/github/nodejs/marks/Module/moduleB.js',
  '/Users/wujian/Documents/github/nodejs/marks/Module/moduleA.js' ]
 */

 /**
  * 入口模块，这里就是本身。在moduleA中的require.main为module.js
  */
 console.log(require.main)
