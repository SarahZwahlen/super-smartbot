import { JSONSchemaType } from 'ajv';
import { Request, Response } from 'express';
import { ajvValidator } from '../../tools/JSONValidator/objectValidator';
import { UserData } from '../../models/user.model';
import { loginUseCase } from './login.usecase';
import { authRepoInMemory } from '../../repositories/auth.repo';

export const loginController = (req: Request, res: Response) => {
    const loginSchema: JSONSchemaType<UserData> = {
        type: 'object',
        required: ['password', 'username'],
        properties: {
            password: { type: 'string' },
            username: { type: 'string' }
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
        req.session.username = { username: req.body.username };

        console.log('session', req.session.username);

        return res.status(200).json({ message: 'Logged' });
    } else {
        return res
            .status(401)
            .json({ message: 'Login failled', error: 'Authentication failed' });
    }
};
