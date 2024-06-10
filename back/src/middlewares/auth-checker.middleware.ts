import { NextFunction, Request, Response } from 'express';

export const isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(`[MIDDLEWARE] ${isAuthenticated.name} - session`, req.session);
    if (req.session.username) {
        next();
    } else {
        res.status(401).json({
            message: 'You are not authenticated',
            error: 'Unauthorized'
        });
    }
};
