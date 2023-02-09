/*
 * @Author: HHG
 * @Date: 2023-02-09 23:32:51
 * @LastEditTime: 2023-02-10 01:23:38
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/controller/test/test.js
 * @文件说明: 
 */
let Router = require('@koa/router');

let router = new Router();

router.get('/test', (ctx, next) => {
  console.log('/test');
});
module.exports = router
