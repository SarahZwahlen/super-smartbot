import { NextFunction, Request, Response } from 'express';

export const auhtChecker = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.session.username === 'toto') {
        return next();
    } else {
        return res.status(401).json({
            message: 'You are not authenticated',
            error: '401 - Unauthorized'
        });
    }
};
