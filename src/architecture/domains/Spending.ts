import { DateTimeString } from 'architecture/util/type/DateTime';
import { TankId } from './Tank';
import { Userid } from './User';

export type SpendingId = string;
export type Spending = {
    userid: Userid;
    spendingId: SpendingId;
    TankId: TankId;
    amount: number;
    payday: DateTimeString;
};
