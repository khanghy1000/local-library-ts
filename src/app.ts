import createError from "http-errors";
import express, { ErrorRequestHandler } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import "dotenv/config";

import indexRouter from "./routes/index";
import { ZodError } from "zod";
import { StatusCodes } from "http-status-codes";
import { fromZodError } from "zod-validation-error";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ZodError) {
        res.status(StatusCodes.BAD_REQUEST).json({
            status: res.statusCode,
            errors: fromZodError(err).toString().split("; "),
        });
        return;
    }

    res.status(err.status || 500);
    res.json({
        status: res.statusCode,
        message: err.message,
    });
};

app.use(errorHandler);

export default app;
