import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const authRouter = router({
  listAuth: publicProcedure.query(() => {
    // [..]
    return [1,2,3];
  }),
});