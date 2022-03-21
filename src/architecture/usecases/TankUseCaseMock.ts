import { Tank } from 'architecture/domains/Tank';
import { ITankUseCase } from 'architecture/interfaces/ITankUseCase';
import uuid from 'uuid';

export class TankUseCase implements ITankUseCase {
    public async findTanks(): Promise<Tank[]> {
        const tanks: Tank[] = Array(3).map(() => {
            const id = uuid.v4();
            return {
                id,
                title: '食費',
                capacity: 30000,
                consumption: 24000,
                supply_day: 25,
                next_supply: '2022-02-25'
            };
        });
        return await tanks;
    }
}
