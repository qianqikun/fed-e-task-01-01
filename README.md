# 钱其琨 ｜ Part 1 | 模块一

## 简答题


### 第一题

最终执行结果为：打印出 10。

原因：
数组a中存放的方法执行时会在作用域中查找i最终找到i为10。

### 第二题

最终执行结果：报错无法在 tmp 声明前访问

原因：
只要块级作用域内存在let命令，它所声明的变量就“绑定”这个区域，不再受外部的影响。
代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

详细查了一下 暂时性死区（TDZ）产生的原因：
由let/const声明的变量，当它们包含的词法环境被实例化时会被创建，但只有在变量的词法绑定已经被求值运算后，才能够被访问。

参考资料：
[理解ES6中的暂时死区(TDZ)](https://segmentfault.com/a/1190000008213835)

### 第三题

```js
    let arr = [12,34,32,89,4]
    let min = Math.min(...arr)
```

### 第四题

使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象；

使用let声明的变量，其作用域为该语句所在的代码块内，无法在其初始化前使用；

使用const声明的是常量，在后面出现的代码中不能再修改该常量的值，其作用域为该语句所在的代码块内，无法在其初始化前使用。

### 第五题

最终结果打印：20

原因：箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

### 第六题

ES5中对象中的属性都是字符串，容易造成属性名冲突,使用Symbol就可以避免，因为Symbol值都是唯一的。迭代器接口部署在Symbol.iterator属性上。

### 第七题

浅拷贝复制的一般只有基本类型，而引用类型在栈中存放的是地址，复制的只有地址。如果对原对象中储存的对象进行修改那么复制的对象中的该对象会受到影响。

深拷贝一般使用递归算法，拷贝对象各个层级的属性。复制出来的每个对象都有属于自己的内存空间，不会互相干扰。

# 第八题

js的异步编程是指在将来执行某个任务，不堵塞线程，es5之前一般使用回调函数，时间监听等方式实现。

Event Loop 负责监听调用栈和消息队列，当调用栈中的任务都结束了会去读取消息队列中的第一个任务，将其放入调用栈中执行。

宏任务可以理解是每次调用栈执行的代码就是一个宏任务，包括每次从事件队列中获取一个事件回调并放到执行栈中执行。包括
* script(整体代码)
* setTimeout
* setInterval
* I/O
* UI交互事件
* postMessage
* MessageChannel
* setImmediate(Node.js 环境)

微任务可以理解成在当前调用栈执行结束后立即执行的任务，包括
* Promise.then
* Object.observe
* MutaionObserver
* process.nextTick(Node.js 环境)

[Faster async functions and promises](https://v8.dev/blog/fast-async) 中写到
>On a high level there are tasks and microtasks in JavaScript. Tasks handle events like I/O and timers, and execute one at a time. Microtasks implement deferred execution for async/await and promises, and execute at the end of each task. The microtask queue is always emptied before execution returns to the event loop.

>在较高级别上，JavaScript中包含任务和微任务。任务处理I / O和计时器等事件，并一次执行一个。微任务为async/ await和promise实现延迟执行，并在每个任务结束时执行。在执行返回到事件循环之前，总是先清空微任务队列。

疑问：是否可以理解为每次宏任务执行完都读取微任务并执行？

### 第九题


## 项目文件说明

- notes : 笔记
- code : 代码
