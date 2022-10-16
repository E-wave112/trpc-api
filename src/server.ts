import * as trpcExpress from '@trpc/server/adapters/express';
import { expressHandler } from 'trpc-playground/handlers/express';
import express, { Request, Response, NextFunction} from 'express';
import {appRouter} from './routers';
import { createContext } from './middlewares';
const PORT = process.env.PORT || 7000;

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
    app.get('/', (_req, res) => res.send('hello there!'));
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  }
  
start();