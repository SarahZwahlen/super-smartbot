import { Request, Response } from 'express';

export const logoutController = (req: Request, res: Response) => {
    console.log('session', req.session.username);
    if (req.session.username) {
        req.session.destroy((error) => {
            if (error) {
                console.log(`error`, error);
                return res
                    .status(400)
                    .json({ message: 'An error occured', error });
            }

            return res
                .status(200)
                .json({ message: 'Session successfully destroyed' });
        });
    } else {
        return res.status(400).json({
            message: 'An error occured',
            error: 'There is no running session'
        });
    }
};
