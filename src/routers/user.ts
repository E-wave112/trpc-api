import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import prisma from '../prisma';
export const userRouter = router({
  listUsers: publicProcedure.query(() => {
    return prisma.user.findMany();
  }),
  // create a query to get a user by id and validate the id param
  getSingleUser: publicProcedure.input(
    z
      .object({
        id: z.number(),
      })
  ).query(async ({ input }) => {
    const { id } = input;
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }),
});