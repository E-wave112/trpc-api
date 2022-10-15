import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
export const userRouter = router({
  listUsers: publicProcedure.query(() => {
    // [..]
    return {key:
        [1,2,3]
    }
  }),
});