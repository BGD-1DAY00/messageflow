import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import keysRoutes from './routes/keysRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = new Koa();
const main_router = new Router();

app.use(bodyParser());
app.use(errorHandler);

main_router.get('/', (ctx) => {
    ctx.body = 'Hello, Koa!';
});
main_router.get('/heartbeat', (ctx) => {
    ctx.body = {

    };
});

app.use(keysRoutes.routes()).use(keysRoutes.allowedMethods());

app.use(main_router.routes()).use(main_router.allowedMethods());

app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});