import { initTRPC } from '@trpc/server';

const trpcInit = initTRPC.create();

export const middleware = trpcInit.middleware;
export const router = trpcInit.router;
export const publicProcedure = trpcInit.procedure;
export const mergeRouters = trpcInit.mergeRouters;