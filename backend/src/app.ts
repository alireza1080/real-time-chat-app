import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import apiRouter from './routes/api.route.js';
import isUserLoggedIn from './middlewares/isUserLoggedIn.middleware.js';
import badJsonErrorHandler from './middlewares/badJsonErrorHandler.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

app.use(isUserLoggedIn);
app.use(badJsonErrorHandler);

app.use('/api', apiRouter);

export default app;
