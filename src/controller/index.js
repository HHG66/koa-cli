/*
 * @Author: HHG
 * @Date: 2023-02-08 22:40:35
 * @LastEditTime: 2023-02-09 13:08:22
 * @LastEditors: 韩宏广
 * @FilePath: \koa-web-cli\src\controller\index.js
 * @文件说明: 
 */
let Router = require('@koa/router');
let router = new Router();

router.get('/', (ctx, next) => {
  console.log('/');
  // ctx.router available
});


router.get('/s', (ctx, next) => {
  // ctx.router available
  ctx.body='/s'
});



// app.use(router.routes())
// app.use(router.allowedMethods());


module.exports=router
