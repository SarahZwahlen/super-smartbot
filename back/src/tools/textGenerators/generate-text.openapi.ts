import OpenAI from 'openai';
import { textGeneratorInterface } from '../../interfaces/textGenerator.interface';

const openAPIText: textGeneratorInterface = {
    generateText: async (): Promise<string> => {
        const api = new OpenAI({ apiKey: process.env['OPEN_API_KEY'] });

        const result = await api.chat.completions.create({
            messages: [
                { content: "Dis moi que c'est un test !", role: 'user' }
            ],
            model: 'gpt-3.5-turbo'
        });

        console.log('response', result);
        return Promise.resolve('OPENAPI WORKS');
    }
};

export default openAPIText;
