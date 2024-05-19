import { textGeneratorInterface } from './interfaces/textGenerator.interface';

const textGeneratorUsecase = async (
    textGenerator: textGeneratorInterface,
    subject: string
): Promise<string> => {
    return await textGenerator.generateText(subject);
};

export default textGeneratorUsecase;
