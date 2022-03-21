import { Tank } from 'architecture/domains/Tank';

export abstract class ITankUseCase {
    public abstract findTanks(): Promise<Tank[]>;
}
