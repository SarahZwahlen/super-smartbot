import { JSONSchemaType } from 'ajv';
import { Request, Response } from 'express';
import { ajvValidator } from '../../tools/JSONValidator/objectValidator';
import { UserData } from '../../models/user.model';
import { loginUseCase } from './login.usecase';
import { authRepoInMemory } from '../../repositories/auth.repo';

export const loginController = (req: Request, res: Response) => {
    const loginSchema: JSONSchemaType<UserData> = {
        type: 'object',
        required: ['password', 'email'],
        properties: {
            password: { type: 'string' },
            email: { type: 'string' }
        },
        additionalProperties: false
    };

    if (!ajvValidator(loginSchema, req.body)) {
        return res
            .status(400)
            .json({ message: 'An error occured', error: 'Invalid data' });
    }

    const isLogged = loginUseCase(req.body, authRepoInMemory);

    if (isLogged) {
        req.session.username = { email: req.body.email };
        console.log(
            `[CONTROLLER] ${loginController.name} -  session`,
            req.session
        );
        return res.status(200).json({ message: 'Logged' });
    } else {
        return res.status(401).json({
            message: 'Login failed',
            error: 'Authentication failed',
            location: loginController.name
        });
    }
};
