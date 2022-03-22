import { User } from 'architecture/domains/User';

export interface UserStorageService {
    user?: User;
    updateUser(user: User): void;
}
