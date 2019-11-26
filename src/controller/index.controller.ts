import { Request, Response, NextFunction } from 'express';

export function healtcheck(req: Request, res: Response, next: NextFunction) {
    return res.json({
        status: 'ok',
        time: new Date(),
        version: process.env.npm_package_version,
    });
}
