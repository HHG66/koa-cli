/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-10 13:03:20
 * @LastEditors: 韩宏广
 * @FilePath: \koa-web-cli\src\app.js
 * @文件说明: 
 */
const Koa = require('koa')
const  app = new Koa();
const bodyParser = require('koa-bodyparser');
const InitController = require('./router/index.js')

app.use(bodyParser())
InitController.InitCore(app)
// app.use(router.routes())
// app.use(router.allowedMethods());


//开启一个web服务器
app.listen(3000, () => {
  console.log('启动服务 端口3000...');
});

module.exports = app