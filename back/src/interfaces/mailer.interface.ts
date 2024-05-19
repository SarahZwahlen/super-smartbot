import { MailData } from '../types/mailData';

export type MailerInterface = {
    sendMail: (data: MailData) => Promise<void>;
};
