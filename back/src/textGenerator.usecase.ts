import { textGeneratorInterface } from './textGenerator.interface';

const textGeneratorUsecase = async (
    textGenerator: textGeneratorInterface,
    subject: string
): Promise<string> => {
    return await textGenerator.generateText(subject);
};

export default textGeneratorUsecase;
