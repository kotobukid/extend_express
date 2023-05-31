import {Request} from "express";
import session, {Session} from 'express-session';

declare module 'express-session' {
  interface SessionData {
      views: number
  }
}

// declare namespace Express {
declare module 'express-serve-static-core' {
    export interface Request {
        user?: {
            id: number;
            username: string;
        };
    }

    export interface Response {
        myCustomData?: {
            hoge: number
        }
    }
}
// EOF