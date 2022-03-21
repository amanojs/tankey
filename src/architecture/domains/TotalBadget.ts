export class TotalBadget {
    private _totalBadget: number | undefined;

    constructor() {
        this._totalBadget = undefined;
    }

    public totalBadget() {
        return this._totalBadget;
    }
    public setTotalBadget(totalBadget: number) {
        this._totalBadget = totalBadget;
    }
}
