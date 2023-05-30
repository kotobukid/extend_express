import express, {Router, Request, Response, NextFunction} from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                username: string;
            };
        }
    }
}

const router: Router = Router();

const middleware1: express.RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
    res.locals.hoge = 100;
    req.user = {
        id: 1,
        username: 'taro'
    };

    next();
};

router.get('/', middleware1, (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.user);
    console.log(res.locals);
    res.send('hello world');
});

export default router;