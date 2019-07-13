/**
 * 原生实现events触发器类
 */

 function EventEmitter(){
     //用来存放所有的事件及其绑定的监听器
    this.events={}
 }
 /**
  * @function on
  * 事件注册
  * @eventName 注册事件名
  * @listener  事件绑定的监听器
  */
 EventEmitter.prototype.on=EventEmitter.prototype.addListener=function(eventName,listener){
    if(this.events[eventName]){
        this.events[eventName].push(listener)
    }else{
        this.events[eventName]=[];
        this.events[eventName].push(listener)
    }
 }
 /**
  * 
  * @function emit 事件触发
  * @eventName 事件名
  * 
  */
 EventEmitter.prototype.emit=function(eventName,...args){
     if(this.events[eventName]&&("flag" in this.events[eventName])){
        this.events[eventName].listenerList.forEach(listener=>{
            listener.apply(this,args)
        })
        delete this.events[eventName];
     }else{
        this.events[eventName]&&this.events[eventName].forEach(listener => {
            listener.apply(this,args);
        });
     }
 }
 /**
  * @function once 事件触发一次
  * @eventName 事件名
  * 
  */
 EventEmitter.prototype.once=function(eventName,listener){
    if(this.events[eventName]){
        this.events[eventName].listenerList.push(listener)
    }else{
        this.events[eventName]={};
        this.events[eventName].flag = true;
        this.events[eventName].listenerList = [];
        this.events[eventName].listenerList.push(listener)
    }
 }
 module.exports = EventEmitter
