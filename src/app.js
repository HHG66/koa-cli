/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-09 13:02:00
 * @LastEditors: 韩宏广
 * @FilePath: \koa-web-cli\src\app.js
 * @文件说明: 
 */
let Koa = require('koa')
const app = new Koa();
let router =require('./controller/index')
 

app.use(router.routes())
app.use(router.allowedMethods());



//开启一个web服务器
app.listen(3000, () => {
  console.log('启动服务 端口3000...');
});