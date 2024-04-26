import { Request, Response } from 'express';
import textGeneratorUsecase from './textGenerator.usecase';
import textCortex from './generate-text.textCortex';

const mailController = async (req: Request, res: Response) => {
    try {
        //Implémenter un mailer

        //Lui passer mon résultat de generation de text

        //rire

       

        res.status(200).json({
            message: await textGeneratorUsecase(textCortex)
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'An error occured',
            error
        });
    }
};

export default mailController;
