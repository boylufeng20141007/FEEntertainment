---
title: new.target属性
date: 2017-12-23 21:58:44
tags: javascript
categories: javascript
---

### new.target属性使用场景
new.target属性允许你检测函数或构造方法是否是通过new运算符被调用的。在通过new运算符被初始化的函数或构造方法中，new.target返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target 的值是undefined。

### 描述
> 1. new.target语法由一个关键字"new"，一个点，和一个属性名"target"组成。通常"new."的作用是提供属性访问的上下文，但这里"new."其实不是一个真正的对象。不过在构造方法调用中，new.target指向被new调用的构造函数，所以"new."成为了一个虚拟上下文。
> 2. new.target属性是一个可以被所有函数访问的元属性。在箭头函数中，new.target指向外围函数的new.target。

**[参考链接](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)**