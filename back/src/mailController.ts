import { Request, Response } from 'express';
import textCortex from './generate-text.textCortex';
import { MailGunSendMail, createMailGunClient } from './mailgun.client';

const mailController = async (req: Request, res: Response) => {
    try {
        await MailGunSendMail(
            createMailGunClient(),
            'Encore la faute des tartes aux pommes',
            textCortex
        );

        return res.status(200).json({ message: 'OK' });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error
        });
    }
};

export default mailController;
