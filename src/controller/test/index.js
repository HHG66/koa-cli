const Router = require('@koa/router');
let router = new Router();
// const index = require('@/service/index.js')
// console.log(index);
router.get('/index', (ctx, next) => {
  // index()
  require('../../../src/service/index.js')()
});
module.exports = router
