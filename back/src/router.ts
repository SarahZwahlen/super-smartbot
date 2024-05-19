import express from 'express';
import sendMailController from './mailController';

const router = express.Router();

router.get('/send-mail', sendMailController);

export default router;
