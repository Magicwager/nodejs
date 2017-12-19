var subject=require('./modules/subject');
var actions=require('./modules/actions');
var object=require('./modules/object');
module.exports=function(){
    console.log(subject("Magicwager ")+actions("say ")+object("hello nodejs!"))
}