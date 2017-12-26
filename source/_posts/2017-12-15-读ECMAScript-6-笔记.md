---
title: 读ECMAScript 6 笔记
date: 2017-12-15 21:27:45
tags: JavaScript
categories: JavaScript
---

### Class的基本语法
1. ES5的构造函数对应ES6的类的构造方法
```javascript
class Point {
  // ...
}
typeof Point // "function"
Point === Point.prototype.constructor // true

class Point {
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

// 等同于

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {}
}
```
### ES5与ES6的继承实质
1. ES5的继承，实质是先创建子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
2. ES6的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再调用子类的构造函数修改this。

### 父类的静态方法也会被子类继承
```javascript
class A {
  static hello() {
    console.log('hello ES6');
  }
}

class B extends A {
  // do something
}

B.hello();  // hello ES6
```
### 判断一个类是否继承另一个类的方法
```javascript
Object.getPrototypeOf(B) === A  // true
```
### super关键字
> 1. 可以当做函数使用:
  第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。

> 2. 也可以当做对象使用。
  第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

### for...in & for ...of 循环的区别
> 1. for...in 语句以原始插入顺序迭代对象的可枚举属性。
> 2. for...of 语句遍历可迭代对象定义要迭代的数据。

 [参考链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)
