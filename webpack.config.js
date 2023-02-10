/*
 * @Author: HHG
 * @Date: 2023-02-09 10:34:44
 * @LastEditTime: 2023-02-10 12:09:11
 * @LastEditors: 韩宏广
 * @FilePath: \koa-web-cli\webpack.config.js
 * @文件说明: 
 */
const path = require('path')
// console.log(process.cwd() + '/src');
// console.log(path.resolve(__dirname, './src/'));
console.log(path.resolve("src"));
const webpack = require('webpack');
module.exports = {
  // target: 'node18.12',
  target:'node',
  // node: {
  //   __dirname: true,
  // },
  // devtool: 'inline-source-map',
  mode: "development", // "production" | "development" | "none"
  // context: path.resolve(__dirname, 'dist'),
  entry: {
    main: path.resolve(__dirname, './src/app.js')
    // main: './main.js'
  },
  devServer: {
    static: './dist/main.js',
  },
  output: {
    clean: true
  },
  resolve: {
    alias: {
      //不生效，不知道是不是在node下的原因
      // $components:'../../../',
      "@src":path.resolve("src"),
    },
    // extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
}