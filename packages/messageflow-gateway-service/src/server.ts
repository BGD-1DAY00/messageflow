import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import { errorHandler } from './middleware/errorHandler';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(errorHandler);

router.get('/', (ctx) => {
    ctx.body = 'Hello, Koa!';
});


app.use(router.routes()).use(router.allowedMethods());

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});