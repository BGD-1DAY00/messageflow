import { Context } from 'koa';
import crypto from 'crypto';

export const generateKeyPair = (ctx: Context) => {
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: { type: 'spki', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
    });

    return { privateKey, publicKey };
}
