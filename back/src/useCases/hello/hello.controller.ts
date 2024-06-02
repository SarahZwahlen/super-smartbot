import { Request, Response } from 'express';

export const HelloController = async (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hello from Super Marmotte' });
};
