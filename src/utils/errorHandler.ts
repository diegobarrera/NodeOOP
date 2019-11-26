import logger from "./logger";
import { Request, Response, NextFunction } from "express";

export default function errorHandler(err: any, req?: Request, res?: Response, next?: NextFunction) {
    logger.error(JSON.stringify(err));
    res.status(err.status || 500);
    res.json({
        error: err.message,
    });
}