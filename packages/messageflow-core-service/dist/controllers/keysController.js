"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyPair = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generateKeyPair = (ctx) => {
    const { privateKey, publicKey } = crypto_1.default.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
    });
    return { privateKey, publicKey };
};
exports.generateKeyPair = generateKeyPair;
