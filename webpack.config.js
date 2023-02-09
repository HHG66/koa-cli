/*
 * @Author: HHG
 * @Date: 2023-02-09 10:34:44
 * @LastEditTime: 2023-02-09 11:43:49
 * @LastEditors: 韩宏广
 * @FilePath: \koa-web-cli\webpack.config.js
 * @文件说明: 
 */
const path=require('path')
console.log(path.resolve(__dirname,'./src/app.js'));
 module.exports={
  target: 'node', 
  mode: "development", // "production" | "development" | "none"
  entry: {
    main:path.resolve(__dirname,'./src/app.js')
  },
  devServer: {
    static: './src/app.js',
  },
  output:{
    clean: true
  }
 }