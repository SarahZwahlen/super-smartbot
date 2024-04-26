import { textGeneratorInterface } from './textGenerator.interface';

const textCortex: textGeneratorInterface = {
    generateText: async (): Promise<string> => {
        const apiURL = 'https://api.textcortex.com/v1/texts/blogs';

        const body = {
            context: 'Les escargots sont de retour !',
            formality: 'less',
            max_tokens: 2048,
            model: 'chat-sophos-1',
            n: 1,
            source_lang: 'fr',
            target_lang: 'fr',
            temperature: 0.65
        };

        const response = await (
            await fetch(apiURL, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    Authorization: `Bearer ${process.env['TEXT_GENERATOR_KEY']}`,
                    'Content-Type': 'application/json'
                }
            })
        ).json();

        return response.data.outputs[0].text;
    }
};

export default textCortex;
