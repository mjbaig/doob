const Koa = require('koa');
const Router = require('koa-router');
const config = require('./config/config');

let app = new Koa();
let router = new Router();

let port = config.application.port;

router.get("/", (ctx, next) => {
    ctx.body = JSON.stringify({status: "Hope is lost"});
    ctx.status = 404;
});

app.use(router.routes());

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app