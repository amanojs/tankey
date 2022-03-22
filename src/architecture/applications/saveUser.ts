import { User, Userid, totalBadget, resetDate, createUser } from 'architecture/domains/User';
import { UserStorageService } from './ports';

interface needService {
    userStorage: UserStorageService;
}

export function useSaveUser(service: needService) {
    const storage: UserStorageService = service.userStorage;

    function saveUser(userid: Userid, totalBadget: totalBadget, resetDate: resetDate): void {
        const user: User = createUser({ userid, totalBadget, resetDate });
        storage.updateUser(user);
    }

    return { saveUser };
}
