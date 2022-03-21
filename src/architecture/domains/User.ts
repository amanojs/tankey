import { DateTimeString } from 'architecture/util/type/DateTime';

export type totalBadget = number;
export type resetDate = number;
export type User = {
    totalBadget: totalBadget;
    resetDate: resetDate;
    // YYYY-MM
    lastResetMonth: DateTimeString;
};

export function createUser(payload: { totalBadget: totalBadget; resetDate: resetDate }): User {
    const user_tmp: User = { ...payload, lastResetMonth: new Date().toISOString() };
    const user = updateResetLog(user_tmp);
    return user;
}
export function needUpdate(user: User): boolean {
    const now = new Date();
    const lastResetMonth = new Date(user.lastResetMonth);
    if (now.getDate() >= user.resetDate) {
        return now.getMonth() !== lastResetMonth.getMonth();
    }
    return now.getMonth() - 1 !== lastResetMonth.getMonth();
}
export function updateResetLog(user: User): User {
    const now = new Date();
    if (now.getDate() >= user.resetDate) {
        const currenMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        return {
            ...user,
            lastResetMonth: currenMonth.toISOString()
        };
    }
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    return {
        ...user,
        lastResetMonth: lastMonth.toISOString()
    };
}
