import { Request, Response } from 'express';
import { mailgunMailer } from '../../tools/mailer/mailgun.client';
import textCortex from '../../tools/textGenerators/generate-text.textCortex';
import { MailData } from '../../types/mailData';
import { sendMailUseCase } from './sendMail.useCase';

const sendMailController = async (req: Request, res: Response) => {
    try {
        const mailData: MailData = {
            title: req.body.mailData || null,
            content: req.body.mailData || null,
            to: req.body.to || process.env.ADMIN_EMAIL
        };

        await sendMailUseCase(mailgunMailer, mailData, textCortex);

        return res.status(200).json({ message: 'OK' });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            error
        });
    }
};

export default sendMailController;
