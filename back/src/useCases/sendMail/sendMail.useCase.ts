import { MailerInterface } from '../../interfaces/mailer.interface';
import { textGeneratorInterface } from '../../interfaces/textGenerator.interface';
import { promptTool } from '../../tools/prompts/prompt.tools';
import { MailData } from '../../types/mailData';

export const sendMailUseCase = async (
    mailer: MailerInterface,
    data: MailData,
    textGenerator?: textGeneratorInterface
) => {
    const mailData = { ...data };

    mailData.title = data.title ? data.title : promptTool.getRandomPrompt();
    mailData.content = data.content
        ? data.content
        : (await textGenerator?.generateText(mailData.title)) ||
          'Les carottes sont cuites';

    await mailer.sendMail(mailData);
};
