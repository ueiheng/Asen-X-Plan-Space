# <p align=center>🚀2023我要吊打前端面试官日记🚀 </p>
**<p align=center>吊打面试官🤠热更系列</p>**


**<p align=center>Created by Asen（阿胜）😎</p>**
**<p align=right>系列热更中💥~~<br>转载请注明.</p>**


# <p align=center>面试规范</p>
## 一、面试技巧示例：
### 1.面试官：Es6听过吗？简单讲讲Es6新特性.

聪明的小明🐽："（听到题目迫不及待插嘴）Es6我知道的，Es6新增数据类型Symbol，模板字符串，Set/Map数据结构，然后可以解构赋值。。稍等我想想，那个数组展开运算符也是Es6的新特性，然后 emmmmmmmm "


面试官："好的，还有吗？你讲讲模板字符串的功能还有解构赋值是只能用来赋值吗？（面试官反问了一大堆）"
🗙


##### 正确回答方法：
**Asen: "（耐心听面试官讲完话）好的，我大概跟您讲一下我对Es6见解。"**

1. （条理清晰）首先Es6新增了 let、const 两个声明变量的关键字。他们都会产生块级作用域，但不会进行变量提升，也不允许重复声明.
2. 其次，Es6对原有的语法进行了增强，例如解构表达式可以进行数组与对象的解构、新增模板字符串可以进行变量拼接、并且也新增了函数参数默认值，提高了容错性.
3. 常用的数组方法，例如find、filter、includes、map、some、every、foreach等.
4. 新增数据类型Symbol，新增数据结构Map和Set.
5. 新增Promise、Proxy、以及Object的新方法：assign、is、keys、entries、values.
6. 您好！关于Es6的新特性我认为主要就是这些！（在第五条说一自己比较熟悉的，这样就算面试官追问，也能应对的得心应手！！👻👻👻）

#### 面试官："好的！您刚提到Promise，可以讲讲promise的三种状态吗？"
### 至此，成功将面试官带到自己熟悉的领域，完美解决本题！🚀🚀🚀

## <p align=center>Javascript系列⬇️</p>
## 2.面试官：Promise用过吗？简单讲一下Promise吧.
**Asen: "（耐心听面试官讲完话）好的，我大概跟您讲一下我对Promise的见解。"**
1. 首先，Promise的存在是为了解决回调地狱，Promise进行异步操作书写更加简洁，并且更加浅显易懂。
2. Promise有三种状态，分别是初始状态pendding、fulfilled和rejected。当Promise从初始pendding状态变化后，就不会再改变，也无法回头。
3. Promise有三个实例方法，分别为then、catch、finally。其中then方法可以接受成功和失败回调，但一般建议将失败回调写在特定的catch实例方法中，finally方法用于进行无论成功或失败都会执行的回调函数。
4. Promise也有5种进阶方法，如promise.all()用于同时执行多个promise操作，但只要有一个rejected时，promise.all就会进入rejected状态。<br>promise.race()竞速用于获取最快进行回调的promise的返回值。<br>promise.allSettled()将等待所有的promise执行完成后，再将结果用数组一起输出。<br>promise.resolve()接受一个value，并返回一个promise。一般用于链式调用。
<br>promise.reject()返回一个状态为失败的Promise，并将失败信息传递给对应的处理方法。
<br><br>**本题回答重点：Promise的三种状态？链式调用？返回值？**

## 3.面试官：Es6新增的数组方法用过吗？.find有听说过吗？
**Asen: "（耐心听面试官讲完话）好的，我都使用过"**
1. 首先，.find接收一个回调函数作为参数，用于找到数组中第一个符合回调函数条件的数组成员。且.find在找到符合值后，直接结束循环，若没有找到则返回Undefined。
2. find的回调函数可以接受三个参数，分别为value、index、arr（值、位置、原数组）。
3. findIndex跟find较为相似，finfIndex用于返回第一个符合条件的数组成员的位置，若都不符合则返回-1。
<br>**本题回答重点：返回值类型是什么？是否总是遍历整个数组？回调函数可以接受什么参数？**

## 4.面试官：讲一下let、const、var的区别？
**Asen: "（耐心听面试官讲完话）好的"**
1. let、const存在块级作用域，且不会直接声明在window对象上面，而var没有块级作用域。
2. let、const不可以重复声明，且const声明时必须直接赋值，而var允许重复声明且随时赋值。
3. var存在变量提升，而let、const不存在变量提升，即未声明前无法使用。
4. const声明引用类型时，内部的值可以修改，因为const声明的值只保证内存地址不变。
<br><br>**本题回答重点：是否变量提升？块级作用域？能否修改？**

## 5.面试官：讲一下箭头函数和普通函数的区别？
1. 首先，箭头函数与普通函数的书写方式不同，箭头函数使用=>来声明函数，而普通函数使用function关键字来声明函数。
2. 箭头函数没有this指向，箭头函数一般指向上下文。且在箭头函数中call、apply、bind不会对this产生影响。
3. 箭头函数都是匿名函数，而普通函数可以是具名函数和匿名函数
4. 箭头函数不能作为构造函数，也不能使用new。
5. 箭头函数没有prototype原型对象，也不具有arguments对象。
<br><br>**本题回答重点：this指向？**

## 6.面试官：平时是如何进行数据类型判断的？
1. 基础类型一般使用typeof来判断，例如字符串，布尔类型，数字类型。
2. 复杂数据类型，可以使用instanceof来判断类型，例如：arr instanceof Array 返回值为true。
3. 最准确判断任意类型方法是：Object.prototype.toString.call(),结果会返回任何一种类型，最精准。
<br><br>**本题回答重点：instanceof、Object.prototype.toString.call()**

## 7.面试官：如何判断一个对象为空对象？
1. 暴力方法：`JSON.stringify(data) === '{}' `直接将对象转换为字符串来判断是否为空。
2. 遍历对象key值：`Object.keys(data).length` ,若值为0即为空对象。
3. 异曲同工，遍历对象value值:`Object.values(data).length`，若值为0即为空对象。
4. 判断`Object.getOwnPropertyNames().length`为0即为空对象。
5. 其次还可以用`for...in...`来遍历对象，判断空对象。
<br><br>**本题回答重点：JSON.stringify()？Object对象方法？**

**<p align=right>更新日期：2023/3/18</p>**
**<p align=right>author:Asen</p>**

## 8.面试官：讲一下diff算法在vue和React中的差别？
1. **Vue的diff算法：**
- Vue采用了双向比较算法，在数据改变后重新生成虚拟DOM树，然后通过新旧虚拟DOM树的比较来检测变化，并对不同之处进行最小化地更新。
- 这种算法通过借助差异对象记录变化，仅更新发生改变的部分，降低了渲染的成本，提高了性能。

2. **React的diff算法：**
- React采用了单向递归算法，在遍历虚拟DOM树时，先假设所有节点都会发生改变，然后通过比较新旧节点，找到需要更新的节点，对其进行更新操作。
- React通过在内存中维护一份新的虚拟DOM树，在真正更新页面前，在内存中完成所有的计算，而真正的页面操作只需要进行一次。
- 这种算法具有可预期性和稳定性，但会造成一些无效操作和重复计算，降低了性能。
<br><br>**本题回答重点：性能比较？**


## <p align=center>Vue系列⬇️</p>
## 1.面试官：Vue3使用过吗？讲一下v-if和v-show的区别？
**Asen: "（耐心听面试官讲完话）我说一下我的看法吧"**
1. 首先，这两个指令都可以切换视图。且当设置v-if、v-show的值为false时，都不会占据空间。
2. v-show是操作css的display属性为none，适用于频繁切换。
3. v-if是直接注释掉DOM节点，性能消耗较大，引起浏览器的重排与重绘，适用于不常切换。
4. v-if 切换有一个局部编译和卸载的过程，产生Dom生命周期，切换过程中可以操作内部的事件监听和子组件。
<br><br>**本题回答重点：切换条件？性能区别？**
## 2.面试官：watch和computed使用过吗？讲一下他们的区别？
**Asen: watch与computed的区别...**
1. 使用场景不同： watch一般用于监听数据变化，并进行一些操作。而computed利用data数据或其他computed进行计算，一般情况下，将结果用于渲染。
2. 性能消耗不同：侦听的数据变化后，watch每次都会直接执行函数，而依赖的数据变化后，computed暂时不会执行，等待下次访问的时候再执行。
3. watch在执行时可以进行异步操作，而computed不支持进行异步操作。
<br><br>**本题回答重点：使用场景？**
## 3.面试官：可以大概讲一下vue3生命周期吗？
**Asen: 生命周期大概分为主要的八大周期...**
1. 组件创建时:<br>setup语法糖已替代该生命周期
        <br>setup => beforeCreate、created
2. 组件挂载时: <br>onBeforeMount、onMounted<br>一般在onMounted钩子函数中进行访问Dom的操作，例如Echarts制图的setOption操作。
3. 组件数据修改时：<br>onBeforeUpdate、onUpdated<br>onUpdated钩子函数将在任意Dom更新后被调用。<br>且父组件的更新钩子函数在子组件的更新钩子函数之后执行。
4. 组件销毁时：<br>onBeforeUnmout、onUnmounted<br>卸载组件实例后调用，调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。
5. 管理Keep-Alive组件周期：<br>onActivated、onDeactivated
6. Vue3调试钩子：<br>onRenderTracked、onRenderTriggered
<br><br>**本题回答重点：setup语法糖？八大主要周期？**

## 4.面试官：nextTick使用过吗？
**Asen: 首先，nextTick的官方定义...**
1. **nextTick**官方定义为：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
2. 首先**nextTick**返回值为一个Promise对象，你可以使用 async 和await来代替promise对象。
3. 当我们在函数中修改某个响应式值时，立刻进行获取，得到的值仍然会是修改前的新值。此时，使用调用**nextTick**函数以后，再次获取，将得到修改后的新值。
4. 其实**nextTick**的设计跟JS的执行机制有关，nextTick也是一个优化手段，例如多次更新，单次进行。对于提高性能有着非常重要的地位。
<br><br>**本题回答重点：nextTick返回值？nextTick的具体作用?**
## 5.面试官：vue为什么要异步加载？

1. 在现代web应用中，随着页面越来越庞大，JavaScript文件也变得越来越大，导致加载时间过长，从而影响用户的体验。
2. 异步加载可以将应用拆分成小块，只加载当前渲染组件所需的代码，从而提高页面的加载速度和性能。
3. 常见实例，vue路由，首屏渲染，提高性能
<br><br>**本题回答重点：性能？ 动态加载？首屏渲染？**
## 6.面试官：vue中修改data值会立刻显示在页面上吗？
1. 在Vue中，修改data值会更新视图，并渲染到页面上。Vue使用了数据劫持的方式，实现了响应式更新。当data属性被修改时，会触发watcher机制，导致视图重新渲染。

2. 如果在修改data值的时候使用了异步方法（比如定时器、Promise等），新的值不会立即渲染到页面上，因为Vue的DOM更新是异步的。
3. 如果需要在DOM更新后执行一些操作，可以使用Vue提供的`this.$nextTick()`方法，在DOM更新之后执行回调函数。
<br><br>**本题回答重点：nextTick? 响应式原理？**
## 7.面试官追问：vue2的响应式原理？
1. Vue的响应式原理使用了Object.defineProperty()和发布-订阅模式，实现了数据驱动视图的双向绑定，极大地简化了视图层的开发，提高了开发效率。
2. 在Vue实例化时，Vue会递归遍历data选项中的所有属性，并使用Object.defineProperty()方法将这些属性转换为getter/setter，以实现响应式更新。对于数组，Vue则重写了其原型链上的一些方法，并在重写后的方法上添加了一些额外逻辑，以监听数组变化。

3. 当Vue检测到数据发生变化时，会通过发布-订阅模式通知视图更新。Vue内部会维护一个Watcher列表，根据依赖收集器建立依赖关系，当数据更新时，会遍历相应的Watcher列表，通知其进行更新。

4. Vue还提供了$watch API和计算属性（computed）来实现更精细的响应式更新。
<br><br>**本题回答重点：发布订阅模式? Object.defineProperty？**
## 8.面试官追问：vue3的响应式原理？
1. Vue3中响应式原理主要采用了ES6的Proxy来替代Object.defineProperty()。

2. 在Vue3中，当创建一个响应式对象时，Vue会使用Proxy来包装这个对象，从而能够拦截对这个对象属性的访问、赋值和删除操作，进而实现响应式更新。
3. 与Vue2的Object.defineProperty()不同，使用Proxy可以监听到对象的新增属性和删除属性操作，并且无需像Vue2那样递归遍历对象属性，在性能上有了很大的提升。


<br><br> **本题回答重点：Proxy?**

**<p align=right>更新日期：2023/4/9</p>**
**<p align=right>author:Asen</p>**