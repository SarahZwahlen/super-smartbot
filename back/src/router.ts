import express from 'express';
import mailController from './mailController';

const router = express.Router();

router.get('/send-mail', mailController);

export default router;
