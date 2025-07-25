import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import apiRouter from './routes/api.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    if (err instanceof SyntaxError && 'body' in err) {
      return res.status(400).send({
        success: false,
        error: 'The JSON payload is malformed',
      });
    }
    next();
  },
);

app.use('/api', apiRouter);

export default app;
