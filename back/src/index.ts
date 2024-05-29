import cors from 'cors';
import express from 'express';
import session from 'express-session';
import * as dotenv from 'dotenv';
import router from './router';
import compression from 'compression';
import helmet from 'helmet';
import { UserData } from './models/user.model';

dotenv.config();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use(
    session({
        secret: process.env.COOKIE_SECRET!,
        resave: false,
        saveUninitialized: true,
        cookie: {
            path: '/',
            httpOnly: true,
            secure: false, // Has to be truthy but make the session works only with HTTPS
            sameSite: true,
            maxAge: 3600000
        }
    })
);
declare module 'express-session' {
    interface SessionData {
        username: Pick<UserData, 'email'>;
    }
}
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
