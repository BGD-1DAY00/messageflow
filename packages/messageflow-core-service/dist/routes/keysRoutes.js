"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const keysController_1 = require("../controllers/keysController");
const router = new router_1.default({ prefix: '/api/users' });
router.get('/', keysController_1.generateKeyPair);
exports.default = router;
