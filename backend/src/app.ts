import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import apiRouter from "./routes/api.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

app.use('/api', apiRouter);

export default app;