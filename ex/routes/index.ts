import express, {Router, Request, Response, NextFunction} from 'express';

const router: Router = Router();

const middleware1: express.RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
    res.locals.myCustomData = {hoge: 100};
    req.user = {
        id: 1,
        username: 'taro'
    };

    next();
};

router.get('/', middleware1, (req: Request, res: Response): void => {
    console.log(req.user);
    console.log(req.user?.username);
    if (req.session && req.session.views) {
        req.session.views++;
    } else {
        req.session.views = 1;
    }
    console.log({views: req.session.views});

    if (res.locals.myCustomData) {
        console.log(res.locals.myCustomData.hoge);
    }
    res.send(`<title>Hello world</title>hello world (${req.session.views})`);
});

export default router;