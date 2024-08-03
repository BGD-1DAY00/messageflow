"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const userController_1 = require("../controllers/userController");
const router = new router_1.default({ prefix: '/api/users' });
router.get('/', userController_1.getUsers);
router.post('/', userController_1.createUser);
exports.default = router;
