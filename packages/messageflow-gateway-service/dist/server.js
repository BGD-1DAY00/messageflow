"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const router_1 = __importDefault(require("@koa/router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = new koa_1.default();
const router = new router_1.default();
app.use((0, koa_bodyparser_1.default)());
app.use(errorHandler_1.errorHandler);
router.get('/', (ctx) => {
    ctx.body = 'Hello, Koa!';
});
app.use(userRoutes_1.default.routes()).use(userRoutes_1.default.allowedMethods());
app.use(router.routes()).use(router.allowedMethods());
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
