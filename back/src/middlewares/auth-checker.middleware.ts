import { NextFunction, Request, Response } from 'express';

export const isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.session.username) {
        next();
    } else {
        res.status(401).json({
            message: 'You are not authenticated',
            error: 'Unauthorized'
        });
    }
};
