import { AuthInterface } from '../../interfaces/auth.interface';
import { UserData } from '../../models/user.model';

export const loginUseCase = (
    user: UserData,
    authTooling: AuthInterface
): boolean => {
    return authTooling.checkUserIdentity(user);
};
