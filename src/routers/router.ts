import { mergeRouters } from "../trpc";
import { authRouter } from "./auth";
import { userRouter } from "./user";

export const appRouter = mergeRouters(authRouter, userRouter);

export type AppRouter = typeof appRouter;