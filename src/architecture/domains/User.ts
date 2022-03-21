import { DateTimeString } from 'architecture/util/type/DateTime';

export type Userid = string;
export type Nickname = string;

export type User = {
    userid: Userid;
    nickname: Nickname;
    _totalBadget: number | undefined;
    _updateDay: number | undefined;
    created: DateTimeString;
};
