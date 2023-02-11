/*
 * @Author: HHG
 * @Date: 2023-02-09 10:34:44
 * @LastEditTime: 2023-02-11 11:22:37
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/webpack.config.js
 * @文件说明: 
 */
const path = require('path')
module.exports = {
  // target: 'node18.12',
  target:'node',
  devtool: 'inline-source-map',
  mode: "development", // "production" | "development" | "none"
  entry: {
    main: path.resolve(__dirname, './src/app.js')
  },
  devServer: {
    static: './dist/main.js',
  },
  output: {
    clean: true
  },
}