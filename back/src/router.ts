import express, { Request, Response } from 'express';
import sendMailController from './useCases/sendMail/sendMail.controller';
import { loginController } from './useCases/login/login.controller';
import { logoutController } from './useCases/logout/logout.controller';
import { HelloController } from './useCases/hello/hello.controller';
import { isAuthenticated } from './middlewares/auth-checker.middleware';

const router = express.Router();
router.get('', HelloController);
router.get('/get-session', (req: Request, res: Response) => {
    console.log('[SESSION]', req.session);
    res.status(200).json({ message: 'OK', data: req.session });
});

router.post('/login', loginController);
router.post('/send-mail', isAuthenticated, sendMailController);

router.delete('/logout', logoutController);

export default router;
