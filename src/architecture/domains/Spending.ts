import { DateTimeString } from 'architecture/util/type/DateTime';
import { TankId } from './Tank';

export type SpendingId = string;
export type SpendingName = string;
export type Amount = number;
export type Spending = {
    spendingId: SpendingId;
    TankId: TankId;
    spendingName: SpendingName;
    amount: Amount;
    payday: DateTimeString;
};

export function createSpending(payload: {
    spendingId: SpendingId;
    TankId: TankId;
    spendingName: SpendingName;
    amount: Amount;
}): Spending {
    return { ...payload, payday: new Date().toISOString() };
}
export function totalSpendingValue(spendings: Spending[]): number {
    return spendings.reduce((total, { amount }) => total + amount, 0);
}
export function editSpendingName(name: SpendingName, spending: Spending): Spending {
    return { ...spending, spendingName: name };
}
export function editAmount(amount: Amount, spending: Spending): Spending {
    return { ...spending, amount };
}
