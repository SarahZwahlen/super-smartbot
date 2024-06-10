import express from 'express';
import sendMailController from './useCases/sendMail/sendMail.controller';
import { loginController } from './useCases/login/login.controller';
import { logoutController } from './useCases/logout/logout.controller';
import { HelloController } from './useCases/hello/hello.controller';

const router = express.Router();
router.get('', HelloController);

router.post('/login', loginController);
router.post('/send-mail', sendMailController);

router.delete('/logout', logoutController);

export default router;
