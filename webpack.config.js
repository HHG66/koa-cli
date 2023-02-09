/*
 * @Author: HHG
 * @Date: 2023-02-09 10:34:44
 * @LastEditTime: 2023-02-10 01:44:07
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/webpack.config.js
 * @文件说明: 
 */
const path = require('path')
// console.log(process.cwd() + '/src');
const webpack = require('webpack');
module.exports = {
  target: 'node',
  node: {
    // __dirname: true,
  },
  devtool: 'eval-source-map',
  mode: "development", // "production" | "development" | "none"

  // resolve: {
  //   alias: {
  //     // Utilities: path.resolve(__dirname, 'src'),
  //   },
  // },
  entry: {
    main: path.resolve(__dirname, './src/app.js')
  },
  devServer: {
    static: './src/app.js',
  },
  output: {
    clean: true
  },
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     '@': process.cwd() + '/src',
  //   }),
  // ],
  resolve: {
    alias: {
      //不生效，不知道是不是在node下的原因
      // '@': process.cwd() + '/src',
      // '@':path.resolve(__dirname, './src/')
    },
  },
}