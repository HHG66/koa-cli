/*
 * @Author: HHG
 * @Date: 2023-02-09 10:34:44
 * @LastEditTime: 2023-02-11 01:22:05
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/webpack.config.js
 * @文件说明: 
 */
const path = require('path')
// console.log(process.cwd() + '/src');
// console.log(path.resolve(__dirname, './src/'));
console.log(path.resolve("src"));
const Koa = require('koa')
 
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
}