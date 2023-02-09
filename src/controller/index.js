/*
 * @Author: HHG
 * @Date: 2023-02-08 22:40:35
 * @LastEditTime: 2023-02-10 01:37:44
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/controller/index.js
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
    const apiDirectory = `${process.cwd()}/src/controller`
    requireDirectory(module, apiDirectory, { visit: ModuleLoad })
    function ModuleLoad(obj) {
      if (obj instanceof Router) {
        InitController.app.use(obj.routes())
      }
    }
  }
}
module.exports = InitController