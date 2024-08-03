import { Context } from 'koa';

export const getUsers = (ctx: Context) => {
    ctx.body = { users: ['Alice', 'Bob', 'Charlie'] };
};

export const createUser = (ctx: Context) => {
    const { name } = ctx.request.body as { name: string };
    ctx.body = { message: `User ${name} created` };
};