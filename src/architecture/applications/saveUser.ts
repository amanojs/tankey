import { User, Userid, totalBadget, resetDate, createUser } from 'architecture/domains/User';
import { useUserStorage } from 'architecture/util/ defaultService';
import { UserStorageService } from './ports';

interface needService {
    userStorage: UserStorageService;
}

export function useSaveUser() {
    const userStorage: UserStorageService = useUserStorage();

    return (userid: Userid, totalBadget: totalBadget, resetDate: resetDate) =>
        saveUser(userid, totalBadget, resetDate, { userStorage });
}

export function saveUser(
    userid: Userid,
    totalBadget: totalBadget,
    resetDate: resetDate,
    { userStorage }: needService
): void {
    const user: User = createUser({ userid, totalBadget, resetDate });
    userStorage.updateUser(user);
}
