import { textGeneratorInterface } from './textGenerator.interface';

const textGeneratorUsecase = async (
    textGenerator: textGeneratorInterface
): Promise<string> => {
    return await textGenerator.generateText();
};

export default textGeneratorUsecase;
