const Koa = require('koa');
const app = new Koa();
const routing = require('./routers/index');
const bodyparser = require('koa-bodyparser');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const KoaStatic = require('koa-static');
const path = require('path');

app.use(error({
  postFormat: (e, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
}));
app.use(KoaStatic(
  path.join(__dirname, './build')
));
app.use(bodyparser());
app.use(parameter(app));
// 匹配路由
routing(app);

// 监听端口
app.listen(3001,()=>{
  console.log('程序已启动在3000端口');
});
