"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const keysRoutes_1 = __importDefault(require("./routes/keysRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = new koa_1.default();
const main_router = new router_1.default();
app.use((0, koa_bodyparser_1.default)());
app.use(errorHandler_1.errorHandler);
main_router.get('/', (ctx) => {
    ctx.body = 'Hello, Koa!';
});
main_router.get('/heartbeat', (ctx) => {
    ctx.body = {};
});
app.use(keysRoutes_1.default.routes()).use(keysRoutes_1.default.allowedMethods());
app.use(main_router.routes()).use(main_router.allowedMethods());
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
