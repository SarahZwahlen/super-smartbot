import Mailgun from 'mailgun.js';
import { MailerInterface } from '../../interfaces/mailer.interface';

const mailgunMailer: MailerInterface = {
    sendMail: async function (data) {
        const client = new Mailgun(FormData).client({
            username: process.env.MAILGUN_SANDBOX_USERNAME || 'api-username',
            key: process.env.MAILGUN_SENDING_KEY || 'key-yourkeyhere'
        });

        await client.messages
            .create(process.env.MAILGUN_SANDBOX_DOMAIN || 'nope', {
                from: `Super Marmotte Sandbox <${process.env.MAILGUN_SANDBOX_USERNAME}>`,
                to: data.to || process.env.ADMIN_EMAIL,
                subject: data.title || 'No title',
                text: 'YOUPI',
                html: `<h1>${data.title}</h1>
                <p>${data.content}</p>`
            })
            .then((message) => console.log('message', message))
            .catch((error) => console.log(error));
    }
};
export { mailgunMailer };
