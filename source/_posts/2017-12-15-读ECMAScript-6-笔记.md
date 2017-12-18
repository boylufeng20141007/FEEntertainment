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
