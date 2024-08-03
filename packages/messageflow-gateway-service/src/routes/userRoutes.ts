import Router from '@koa/router';
import { getUsers, createUser } from '../controllers/userController';

const router = new Router({ prefix: '/api/users' });

router.get('/', getUsers);
router.post('/', createUser);

export default router;