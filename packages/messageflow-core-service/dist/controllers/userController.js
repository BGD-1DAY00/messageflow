"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const getUsers = (ctx) => {
    ctx.body = { users: ['Alice', 'Bob', 'Charlie'] };
};
exports.getUsers = getUsers;
const createUser = (ctx) => {
    const { name } = ctx.request.body;
    ctx.body = { message: `User ${name} created` };
};
exports.createUser = createUser;
