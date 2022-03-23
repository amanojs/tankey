export type TankId = string;
export type title = string;
export type badget = number;
export type consumption = number;
export type remaining_per = number;

export type Tank = {
    tankId: TankId;
    title: title;
    badget: badget;
    consumption: consumption;
};

export function createTank(payload: { tankId: TankId; title: title; badget: badget; consumption: consumption }): Tank {
    return payload;
}
export function resetTanks(tanks: Tank[]): Tank[] {
    return tanks.reduce((empTanks: Tank[], tank) => {
        empTanks.push({ ...tank, consumption: 0 });
        return empTanks;
    }, []);
}
export function editTitle(title: title, tank: Tank): Tank {
    return { ...tank, title };
}
export function editBadget(badget: badget, tank: Tank): Tank {
    return { ...tank, badget };
}
export function calcRemainingPer(tank: Tank): remaining_per {
    // TODO  小数点切り上げ 見直す必要あり
    const { badget, consumption } = tank;
    // 小数点第一を基準に四捨五入
    const decimals = Math.round((1 - consumption / badget) * 100) / 100;
    const percent = decimals * 100;
    return percent;
}
