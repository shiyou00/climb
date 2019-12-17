const Koa = require('koa');
const app = new Koa();
const routing = require('./routers/index');
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());

// 匹配路由
routing(app);

// 监听端口
app.listen(3000,()=>{
  console.log('程序已启动在3000端口');
});
