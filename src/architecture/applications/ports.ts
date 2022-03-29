import { badget, Tank, title } from 'architecture/domains/Tank';
import { User } from 'architecture/domains/User';

export interface UserStorageService {
    user?: User;
    updateUser(user: User): void;
}
export type addTankParam = {
    title: title;
    badget: badget;
};
export interface TankStorageService {
    tanks: Tank[];
    addTank(tankParam: addTankParam): void;
    updateTanks(tanks: Tank[]): void;
}
