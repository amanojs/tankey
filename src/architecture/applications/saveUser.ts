import { User } from 'architecture/domains/User';
import { UserStorageService } from './ports';

interface needService {
    userStorageService: UserStorageService;
}

export function useSaveUser(service: needService) {
    const storage: UserStorageService = service.userStorageService;

    function saveUser(user: User): void {
        storage.updateUser(user);
    }

    return { saveUser };
}
