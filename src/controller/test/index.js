module.exports = (ctx, next) => {
  // console.log(ctx.request.body);
  console.log('处理路由参数');
  require('../../service/test/index.js')(ctx, next)
}

