import Mailgun from 'mailgun.js';
import { IMailgunClient } from 'mailgun.js/Interfaces';
import { textGeneratorInterface } from './textGenerator.interface';
import textGeneratorUsecase from './textGenerator.usecase';

const createMailGunClient = () => {
    const mailgun = new Mailgun(FormData);

    return mailgun.client({
        username: process.env.MAILGUN_SANDBOX_USERNAME || 'api-username',
        key: process.env.MAILGUN_SENDING_KEY || 'key-yourkeyhere'
    });
};

const MailGunSendMail = async (
    client: IMailgunClient,
    subject: string,
    textGenerator: textGeneratorInterface
) => {
    const text = await textGeneratorUsecase(textGenerator, subject);

    client.messages
        .create(process.env.MAILGUN_SANDBOX_DOMAIN || 'nope', {
            from: `Mailgun Sandbox <${process.env.MAILGUN_SANDBOX_USERNAME}>`,
            to: 'smarmotte@sfr.fr',
            subject: subject,
            text: 'YOUPI',
            html: `<h1>${subject}</h1>
                <p>${text}</p>`
        })
        .then((message) => console.log('message', message))
        .catch((error) => console.log(error));
};

export { createMailGunClient, MailGunSendMail };
