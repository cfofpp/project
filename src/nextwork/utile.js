export default{
  //搜索设置防抖函数
  debounce(fn,time){
    let timeout
     return function(){
         clearTimeout(timeout)
        timeout=setTimeout(()=>{
            fn.apply(this,arguments)
         console.log(fn);
        },time)
     }
 }
}