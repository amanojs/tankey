import { Tank } from 'architecture/domains/Tank';
import { User } from 'architecture/domains/User';

export interface UserStorageService {
    user?: User;
    updateUser(user: User): void;
}
export interface TankStorageService {
    tanks: Tank[];
    updateTanks(tanks: Tank[]): void;
}
