import express from 'express';
import router from "./routes/index.js";

const app: express.Application = express();

app.use(router);

export default app;