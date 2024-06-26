import { AuthInterface } from '../interfaces/auth.interface';

export const authRepoInMemory: AuthInterface = {
    checkUserIdentity: (user) => {
        if (
            user.password === process.env.ADMIN_PASSWORD &&
            user.email === process.env.ADMIN_EMAIL
        ) {
            return true;
        } else {
            return false;
        }
    }
};
