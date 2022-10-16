import { TRPCError, inferAsyncReturnType } from "@trpc/server";
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
const JWT_SECRET = process.env.JWT_SECRET
import prisma from "../prisma";


export async function createContext(req: Request, res: Response) {
    const auth = req.headers["authorization"];
    try {
        if (auth) {
            const token = auth.split("Bearer")[1];
            const decoded = jwt.verify(token, JWT_SECRET);
            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id
                }
            })
            if (!user) {
                throw new Error("User not found!");
            }
            const reqUser = (req as any).user = user;
            return reqUser;
        } else {
            throw new Error("No auth token found!");
        }  
    } catch (error) {
        console.error(error)
        throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
        });
    }
    // const session = await getSession({ req: opts.req});
    // return {
    //   session,
    // };

  };

export type Context = inferAsyncReturnType<typeof createContext>;
// const isAdmin = context.middleware(async ({ ctx, next }) => {
//   if (!ctx.user?.isAdmin) {
//     throw new TRPCError({ code: 'UNAUTHORIZED' });
//   }
//   return next({
//     ctx: {
//       user: ctx.user,
//     }
//   });
// });