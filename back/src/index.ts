import cors from 'cors';
import express from 'express';
import session from 'express-session';
import * as dotenv from 'dotenv';
import router from './router';
import compression from 'compression';
import helmet from 'helmet';
import { UserData } from './models/user.model';

dotenv.config();
const cookieMaxAge = 60 * 60 * 1000;
declare module 'express-session' {
    interface SessionData {
        username: Pick<UserData, 'email'>;
    }
}

const testSession = require('express-session');
const MemoryStore = require('memorystore')(testSession);
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use(
    testSession({
        secret: process.env.COOKIE_SECRET!,
        resave: false,
        saveUninitialized: true,
        cookie: {
            path: '/',
            httpOnly: true,
            secure: process.env.APPLICATION_MODE === 'prod', // Has to be truthy but make the session works only with HTTPS
            sameSite: true,
            maxAge: cookieMaxAge
        },
        store: new MemoryStore({ checkPeriod: cookieMaxAge })
    })
);

app.use(
    cors({
        origin: process.env.FRONT_LOCAL_URL,
        credentials: true,
        optionsSuccessStatus: 200
    })
);

app.use(helmet());
app.disable('x-powered-by');

app.use('/', router);
app.listen(process.env.PORT_BACKEND, () =>
    console.log(`server is running at ${process.env.BACK_LOCAL_URL}`)
);
