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
    return this
 }
 /**
  * 
  * @function emit 事件触发
  * @eventName 事件名
  * 
  */
 EventEmitter.prototype.emit=function(eventName,...args){
    this.events[eventName]&&this.events[eventName].forEach(listener => {
        listener.apply(this,args);
    });
    return this;//返回对 EventEmitter 的引用，以便可以链式调用。
 }
 /**
  * @function once 事件触发一次
  * @eventName 事件名
  * @listener 事件绑定的监听器
  * 
  */
 EventEmitter.prototype.once=function(eventName,listener){
   let wrapper = (...args)=>{
        listener.apply(this,args)
        this.removeListener(eventName,listener)
   }
   this.on(eventName,wrapper)
   return this;
 }
 /**
  * @function removeListener 事件触发一次
  * @eventName 事件名
  * @listener 事件绑定的监听器
  */
 EventEmitter.prototype.removeListener=function(eventName,listener){
    this.events[eventName] = this.events[eventName].filter(l=>l===listener);
    return this;//返回对 EventEmitter 的引用，以便可以链式调用。
  }
  /**
   * @function  
   */
 module.exports = EventEmitter
