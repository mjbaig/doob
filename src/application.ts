import * as Koa from 'koa';
import * as Router from 'koa-router';
import authenticate from './middlewares/authenticate';

let app = new Koa();
let router = new Router();

let port = 4200;

app.use(authenticate);

router.get("/", (ctx, next) => {
    ctx.body = JSON.stringify({status: "Hope is lost"});
    ctx.status = 404;
});

app.use(router.routes());

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = app;