/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-08 23:11:52
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/app.js
 * @文件说明: 
 */
let Koa = require('koa')
var bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(async ctx => {
  ctx.body = 'Hello World';
});
console.log(bodyParser);
app.listen(3000);