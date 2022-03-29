import { Tank } from 'architecture/domains/Tank';
import { useTankStorage } from 'architecture/util/ defaultService';
import { addTankParam, TankStorageService } from './ports';

export function useAddTank() {
    const tankStorage = useTankStorage();
    return ({ title, badget }: addTankParam) => addTank({ title, badget }, tankStorage);
}

export async function addTank({ title, badget }: addTankParam, tankStorage: TankStorageService): Promise<void> {
    return await tankStorage.addTank({ title, badget });
}
