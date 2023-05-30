declare namespace Express {
    interface Request {
        user?: {
            id: number;
            username: string;
        };
    }

    interface Response {
        myCustomData?: {
            hoge: number
        }
    }
}
// EOF