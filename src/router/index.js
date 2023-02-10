/*
 * @Author: HHG
 * @Date: 2023-02-10 12:07:23
 * @LastEditTime: 2023-02-10 13:00:53
 * @LastEditors: 韩宏广
 * @FilePath: \koa-web-cli\src\router\index.js
 * @文件说明: 
 */
const requireDirectory = require('require-directory')
const Router = require('@koa/router')
class InitController {
  static InitCore(app) {
    InitController.app = app
    InitController.InitLoadRouters()
  }
  static InitLoadRouters() {
    //这里不能使用@别名
    const apiDirectory = `${process.cwd()}/src/router`
    requireDirectory(module, apiDirectory, { visit: ModuleLoad })
    function ModuleLoad(obj) {
      if (obj instanceof Router) {
        InitController.app.use(obj.routes())
        InitController.app.use(obj.allowedMethods())
        
      }
    }
  }
}
module.exports = InitController