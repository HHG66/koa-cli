/*
 * @Author: HHG
 * @Date: 2023-02-18 00:13:43
 * @LastEditTime: 2023-02-18 12:59:33
 * @LastEditors: 韩宏广
 * @FilePath: /koa-cli/cli.js
 * @文件说明: 
 */
const yargs = require('yargs');
const ejs = require('ejs');
const fs = require('fs');

const options = yargs
  .usage('Usage: -n <name>')
  .usage('Usage: -t <path>')
  .option('n', { alias: 'name', describe: 'Controller name', type: 'string', demandOption: true })
  .option('t', { alias: 'path', describe: 'path name', type: 'string', demandOption: true })
  .argv;

// const catalogue = yargs
//   .usage('Usage: -t <path>')
//   .option('t', { alias: 'path', describe: 'Controller name', type: 'string', demandOption: true })
//   .argv;

const controllerTemplate = fs.readFileSync('./templates/controller.ejs', 'utf-8');
const serverTemplate = fs.readFileSync('./templates/server.ejs', 'utf-8');

const controllerContent = ejs.render(controllerTemplate, { name: options.name, path: options.path });
const serverContent = ejs.render(serverTemplate, { name: options.name, path: options.path });
if (!fs.existsSync("./src/controller/")) {
  fs.mkdirSync('./src/controller')
  !fs.existsSync(`./src/controller/${options.path}`) ? fs.mkdirSync(`./src/controller/${options.path}`) : ''
  fs.writeFileSync(`./src/controller/${options.path}/${options.name}.js`, controllerContent);
} else {
  !fs.existsSync(`./src/controller/${options.path}`) ? fs.mkdirSync(`./src/controller/${options.path}`) : ''
  fs.writeFileSync(`./src/controller/${options.path}/${options.name}.js`, controllerContent);
}

if (!fs.existsSync("./src/service/")) {
  fs.mkdirSync('./src/service')
  !fs.existsSync(`./src/service/${options.path}`) ? fs.mkdirSync(`./src/service/${options.path}`) : ''
  fs.writeFileSync(`./src/service/${options.path}/${options.name}.js`, serverContent);
} else {
  !fs.existsSync(`./src/service/${options.path}`) ? fs.mkdirSync(`./src/service/${options.path}`) : ''
  fs.writeFileSync(`./src/service/${options.path}/${options.name}.js`, serverContent);
}

if (!fs.existsSync("./src/mapper/")) {
  fs.mkdirSync('./src/mapper')
  !fs.existsSync(`./mapper/${options.path}`) ? fs.mkdirSync(`./src/mapper/${options.path}`) : ''
  fs.writeFileSync(`./mapper/${options.path}/${options.name}.js`, serverContent);
} else {
  !fs.existsSync(`./src/mapper/${options.path}`) ? fs.mkdirSync(`./src/mapper/${options.path}`) : ''
  fs.writeFileSync(`./src/mapper/${options.path}/${options.name}.js`, serverContent);
}

