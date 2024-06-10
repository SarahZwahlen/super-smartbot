import { Request, Response } from 'express';

export const logoutController = (req: Request, res: Response) => {
    if (req.session.username) {
        req.session.destroy((error) => {
            if (error) {
                return res.status(400).json({
                    messag: 'An error occured',
                    error: 'Destroy user session failed',
                    location: logoutController.name
                });
            }
            return res
                .status(200)
                .json({ message: 'Session successfully destroyed' });
        });
    } else {
        return res.status(400).json({
            message: 'An error occured',
            error: 'There is no running session',
            location: logoutController.name
        });
    }
};
