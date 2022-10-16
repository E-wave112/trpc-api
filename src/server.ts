import * as trpc from '@trpc/server';
import { TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import { expressHandler } from 'trpc-playground/handlers/express';
import express, { Request, Response, NextFunction} from 'express';
import {appRouter} from './routers';
import { createContext } from './middlewares';

async function start() {
    const trpcApiEndpoint = '/api/trpc'
    const playgroundEndpoint = '/api/trpc-playground'
    // express implementation
    const app = express();
  
    app.use((req:Request, _res:Response, next:NextFunction) => {
      // request logger
      console.log('⬅️ ', req.method, req.path, req.body ?? req.query);
  
      next();
    });
  
    app.use(
      trpcApiEndpoint,
      trpcExpress.createExpressMiddleware({
        router: appRouter,
        // createContext
      }),
    );

    app.use(
        playgroundEndpoint,
        await expressHandler({
            trpcApiEndpoint,
            playgroundEndpoint,
            router: appRouter,
        }),
    )
    app.get('/', (_req, res) => res.send('hello'));
    app.listen(7000, () => {
      console.log('listening on port 7000');
    });
  }
  
start();