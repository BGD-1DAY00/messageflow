import Router from '@koa/router';
import { generateKeyPair } from "../controllers/keysController";

const router = new Router({ prefix: '/api/users' });

router.get('/', generateKeyPair);

export default router;