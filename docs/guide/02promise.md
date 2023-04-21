**Promise告诉你，写代码真的也可以很优雅**
# 一、引入
==掌握程度：必备技能==

#### 在进行异步操作的时候，以往的方法能用，但是略显粗糙，存在较多问题
Promise就是用来处理异步操作，并且，Promise存在一个基本格式，这样就从根源上将大家的代码风格统一，使得异步操作变得非常方便，易读。


1. 最原始，我们在进行异步操作的时候，通常会使用==回调函数==,来反馈成功或者失败
```
//封装异步操作函数
function fn(n,successCallback,failCallback) {
          setTimeout(()=>{
          if(n>0){
              let area = 0;
              area = 3.14*n*n
              //成功
              successCallback(total)
          }else {
              failCallback(`${n}值非法`)
          }
          },3000)
   }
  
  //封装后调用,传入三个参数
 fn(10,(value)=>{
 console.log('成功，圆的面积是：',value)
 },(err)=>{
 console.log('失败'，err)
 })
```
==没有promise时，前端处理异步操作的常用方法，存在两个比较重要的问题==

（1）封装的函数需要三个参数，但是三个参数的位置，并非固定，这意味着，别人需要使用你封装的函数时，一定需要观察仔细，传入正确的参数，使用者可能必须要先看你的文档，才能参与到工作中

（2）当在`successCallback`或者`failCallback`中，再次调用其他函数，嵌套多次时，形成回调地狱，这样的代码不仅不利于维护，可以说是==非常低效==。

# 二、Promise的美妙世界

1.在遇到诸多如此问题后，急需一个解决办法能将异步操作进行简化并统一格式——==Promise==诞生

本文举例如下：
```
function fn(n) {
            const promise = new Promise((resolve, reject) => {
                //异步代码
                setTimeout(() => {
                    if (n > 0) {
                        //传入半径求圆面积
                        let area = 0;
                        area = 3.14*n*n
                        //返回成功的回调函数
                        resolve(area)
                    } else {
                        reject(`${n}非法值`)
                    }
                }, 3000)

            })
            return promise
  }
  
  //在调用封装好的promise函数时，可以使用"链式调用"
  fn(10).then(value => {
         console.log('成功，圆的面积是：', value);
      }).catch(err => {
         console.log('失败', err)
 })
    
```

不难看出，使用`promise`后，当我们再次调用封装好的函数，只需要传入一个业务参数，本文中即n，即可实现异步操作，这与最原始的异步操作更容易使用，更易读，更简便！


# 三、resolve reject then catch 讲解

   1. ==resolve与reject==
     
       在new Promise 后，传入了两个参数，一个就是`resolve`另一个就是`reject`
       
       其实不难看出，`resolve`是成功回调函数，而`reject`是失败回调函数，往这两个函数传入的参数，将可以在调用时获取到。
       
   2. ==then 与 catch==

        不难看出，调用封装好的函数后，需要传入一个成功的回调函数和一个失败的回调函数，而`.then`就是成功回调函数，我们在`resolve`中传入的参数将在`.then`中获取到，同理`.catch`也是失败回调函数，参数依然可以从`reject`中获取
        
   3. ==特别注意！！==
        
         resolve与reject名字可更改，而`.then`与`.catch`是固定的！不过通常情况下，程序员们都会统一格式，不会主动修改`resolve`与`reject`。
      
    
# 四、 Promise的三种状态

- pending：初始状态/待定
 
- fulfilled：操作成功/实现
 
- rejected：操作失败/被否决


==注意==：

1. Promise 会根据状态来确定执行哪个方法
   Promise 实例化时状态默认为 pending 的
   
   **如异步状态异常为：rejected，异步状态成功为：fulfilled**

2. 当promise执行任意回调后，直接结束`promise`，意味着，如果想再次执行回调，必须再次调用封装的函数
，即进入fulfilled或rejected状态后，无法再回到其他任意状态。



 ==文末==
感谢阅读，还望支持！欢迎学习交流，如有错误，还请指正！  

已更新于2022/11/29.

作者：Asen-coder（阿胜）

**Promise告诉你，写代码真的也可以很优雅**