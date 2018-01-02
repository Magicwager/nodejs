const path=require('path')
let cache = {};

  function store(key, value) {
      cache[path.normalize(key)] = value;
  }
/* 这里通过 path.normalize把多余的反斜杠去掉并且解析了‘.’以及‘..’*/
  store('foo/bar', 1);
  store('foo//baz//../bar', 2);
  console.log(cache);  // => { "foo/bar": 2 }
/* 路径的拼接 */
let pathOld=__dirname;
let pathNew=path.join(__dirname,'./pathTest','./index.js')
console.log(pathNew)
/* 文件后缀得到获取 */
const a=path.extname('foo/bar.js');
console.log(a)