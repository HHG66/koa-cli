/*
 * @Author: HHG
 * @Date: 2023-02-08 22:13:49
 * @LastEditTime: 2023-02-18 00:08:42
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/src/app.js
 * @文件说明: 
 */
require('app-module-path').addPath(__dirname);

const Koa = require('koa')
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const log4js = require("log4js");
const mongoConnect = require('lib/db.js')
const InitController = require('./router/index.js')
const modelInit = require('models/index.js')

const app = new Koa();

app.use(cors());

//写入全局变量
let router = new Router({
  prefix: '/admin'
});
global.router = router

app.use(bodyParser())

InitController.InitCore(app)


mongoConnect()
modelInit()


log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});
const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");
app.on('error', (error, ctx) => {
  logger.debug(error);
  console.log(error);
});
//开启一个web服务器 
app.listen(3001, () => {
  console.log('启动服务 端口3000...');
});

global.app = app

module.exports = app
