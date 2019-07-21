/**
 * nextTick的特性
 *  它会在事件循环的下一个时间点中触发任何其他 I/O 事件（包括定时器）之前运行
 */

 console.log("begin")
 setTimeout(()=>{
    console.log("then") 
 })
 process.nextTick(()=>{
     console.log("last")
 })

 //begin last then

/**
 * 开发 API 时非常重要，以便在构造对象之后但在发生任何 I/O 之前，为用户提供分配事件处理函数的机会：
 * @param {*} options 
 */
 function MyThing(options) {
    this.setupOptions(options);
  
    process.nextTick(() => {
      this.startDoingStuff();
    });
  }
  
  const thing = new MyThing();
  thing.getReadyForStuff();
  
  // thing.startDoingStuff() 现在被调用，而不是在之前。