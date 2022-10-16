import { TRPCError } from "@trpc/server";
import { context } from "../trpc";

export const isAuthed = context.middleware(({ next, ctx }) => {
    if (!ctx) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
      });
    }
    return next({
      ctx: {
        // Infers the `session` as non-nullable
        user: ctx,
      },
    });
  });