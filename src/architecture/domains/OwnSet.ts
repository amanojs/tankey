export class OwnSet {
    private _totalBadget: number | undefined;
    private _updateDay: number | undefined;

    constructor() {
        this._totalBadget = undefined;
        this._updateDay = undefined;
    }

    public totalBadget() {
        return this._totalBadget;
    }
    public updateDay() {
        return this._updateDay;
    }
    public setTotalBadget(totalBadget: number) {
        this._totalBadget = totalBadget;
    }
    public setUpdateDay(totalUpdateDay: number) {
        this._updateDay = totalUpdateDay;
    }
}
