import { DateTimeString } from 'architecture/util/type/DateTime';
import { Userid } from './User';

export type TankId = string;
export type Tank = {
    userid: Userid;
    tankId: TankId;
    title: string;
    badget: number;
    consumption: number;
    remaining_per: number;
};
