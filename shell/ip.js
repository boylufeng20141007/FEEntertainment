/**
 * 开发服务
 * 查询本机的局域网IP：192.168.*.*
 * 端口号是否被占用port:默认8090
 */

'use strict';

var IP = require('ip');

/**
 * 获取本主机IP
 */
function getHostIP(){
    return '当前主机IP：' + IP.address() || '127.0.0.1';
}

console.log(getHostIP());

