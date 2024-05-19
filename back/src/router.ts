import express from 'express';
import sendMailController from './sendMail.controller';

const router = express.Router();

router.get('/send-mail', sendMailController);

export default router;
