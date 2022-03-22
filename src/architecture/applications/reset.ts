import { resetTanks, Tank } from 'architecture/domains/Tank';
import { User, updateResetLog, needUpdate } from 'architecture/domains/User';
import { TankStorageService, UserStorageService } from './ports';

interface needService {
    userStorage: UserStorageService;
    tankStorage: TankStorageService;
}

export function useReset(service: needService) {
    const { userStorage, tankStorage } = service;

    function reset(user: User, tanks: Tank[]): void {
        if (!needUpdate(user)) return;
        const reseted_tanks = resetTanks(tanks);
        const reseted_user = updateResetLog(user);
        tankStorage.updateTanks(reseted_tanks);
        userStorage.updateUser(reseted_user);
    }

    return { reset };
}
