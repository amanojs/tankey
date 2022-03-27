import { resetTanks, Tank } from 'architecture/domains/Tank';
import { User, updateResetLog, needUpdate } from 'architecture/domains/User';
import { useUserStorage, useTankStorage } from 'architecture/util/ defaultService';
import { TankStorageService, UserStorageService } from './ports';

interface needService {
    userStorage: UserStorageService;
    tankStorage: TankStorageService;
}

export function useReset() {
    const [userStorage, tankStorage] = [useUserStorage(), useTankStorage()];
    return (user: User, tanks: Tank[]) => reset(user, tanks, { userStorage, tankStorage });
}

export function reset(user: User, tanks: Tank[], { userStorage, tankStorage }: needService): void {
    if (!needUpdate(user)) return;
    const reseted_tanks = resetTanks(tanks);
    const reseted_user = updateResetLog(user);
    tankStorage.updateTanks(reseted_tanks);
    userStorage.updateUser(reseted_user);
}
