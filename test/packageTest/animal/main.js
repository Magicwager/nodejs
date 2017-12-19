var subject=require('./modules/subject');
var actions=require('./modules/actions');
var object=require('./modules/object');
module.exports=function(){
    console.log(subject("Cat ")+actions("eat ")+object("mouse"))
}