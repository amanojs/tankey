import { OwnSet } from 'architecture/domains/User';

export abstract class IOwnSet {
    public abstract selectTotalBadget(): Promise<[]>;
}
