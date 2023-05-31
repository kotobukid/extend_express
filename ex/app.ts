import express from 'express';
import session from 'express-session';
import router from "./routes/index.js";

const app: express.Application = express();

app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true
}));

app.use(router);

export default app;