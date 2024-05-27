import { UserData } from '../models/user.model';

export type AuthInterface = {
    checkUserIdentity: (user: UserData) => boolean;
};
