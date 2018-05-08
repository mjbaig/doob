import * as Kota from 'koa';
import { Context } from 'koa';

export default async function authenticate(ctx: Context, next: () => Promise<any>){
    console.log(`user is authenticated`)
    next();
}
