
const app = require('../app.js')
module.exports = (ctx, next) => {
  // console.log(ctx,next);
  // console.log( ctx.request.body);
  // console.log(ctx.query);
  // console.log(ctx.request.query);
  // console.log(ctx.request.query.test);
  // console.log('test');
  // console.log(next);
  business()
  next()
}
app.use((ctx, next) => {
  console.log('自定义中间件');
  next()
});
app.use((ctx, next) => {
  console.log('自定义中间件2');
});

const business = (ctx) => {
  console.log('处理业务');
  models().then(res => {
    console.log(res);
  })
}

//数据库操作要异步处理
const models = async () => {
  return new Promise(function (resolve, reject) {
    console.log('调用mongodb数据库');
    resolve('Promise')
  })
}