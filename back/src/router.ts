import express, { Request, Response } from 'express';
import sendMailController from './useCases/sendMail/sendMail.controller';
import { loginController } from './useCases/login/login.controller';
import { logoutController } from './useCases/logout/logout.controller';

const router = express.Router();
router.get('', (req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hello from Super Marmotte' });
});

router.post('/login', loginController);
router.post('/send-mail', sendMailController);

router.delete('/logout', logoutController);

export default router;
