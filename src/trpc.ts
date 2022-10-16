import { initTRPC } from '@trpc/server';
import { Context } from './middlewares';

export const trpcInit = initTRPC.create();
export const middleware = trpcInit.middleware;
export const router = trpcInit.router;
export const publicProcedure = trpcInit.procedure;
export const mergeRouters = trpcInit.mergeRouters;
export const context = initTRPC.context<Context>().create();