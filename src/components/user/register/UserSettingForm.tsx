import InputAdornment from '@mui/material/InputAdornment';
import ErrorTwoTone from '@mui/icons-material/ErrorRounded';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import YenIcon from '@mui/icons-material/CurrencyYenTwoTone';
import ResetDateIcon from '@mui/icons-material/UpdateTwoTone';
import { RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import numericCheck from 'architecture/util/numericCheck';
import Progress from '@mui/material/LinearProgress';
import { useSaveUser } from 'architecture/applications/saveUser';

type InputFields<T> = {
    totalBadget: T;
    resetDate: T;
};
interface Inputs extends InputFields<string> {
    totalBadget: string;
    resetDate: string;
}
const validateRule: InputFields<RegisterOptions> = {
    totalBadget: {
        required: { value: true, message: '必須項目です' },
        pattern: { value: /^[1-9][0-9,]*/, message: '半角数字以外は入力できません' }
    },
    resetDate: {
        required: { value: true, message: '必須項目です' },
        maxLength: { value: 2, message: '正しい日付を入力してください' },
        pattern: { value: /^[1-9][0-9]*/, message: '正しい日付を入力してください（９日なら９）' },
        min: { value: 1, message: '正しい日付を入力してください' },
        max: { value: 31, message: '正しい日付を入力してください' }
    }
};

export const UserSettingForm = (props: { userid: string }) => {
    const [registError, setRegistError] = useState<boolean>(false);
    const [registLoading, setRegistLoading] = useState<boolean>(false);
    const saveUser = useSaveUser();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('form data', data);
        registReq(data);
    };
    const registReq = async ({ totalBadget, resetDate }: Inputs): Promise<void> => {
        try {
            setRegistLoading(true);
            await saveUser(props.userid, Number(totalBadget), Number(resetDate));
        } catch (err) {
            setRegistError(true);
        } finally {
            setRegistLoading(false);
        }
    };
    const strEscape = (val: string): string => {
        if (numericCheck(Number(val))) return val;
        let escapedVal = String(val.replace(/\D+/, ''));
        const newVal = escapedVal !== '0' ? escapedVal : '';
        return newVal;
    };

    return (
        <form className="setting-form" onSubmit={handleSubmit(onSubmit)}>
            {registLoading && <Progress color="primary" className="mb-3" />}
            {registError && (
                <p className="flex items-center text-red-500 text-sm">
                    <ErrorTwoTone className="mr-1" fontSize="small" />
                    登録エラー
                </p>
            )}

            <InputLabel className="pl-2 pt-1 text-xs text-gray-800">1ヶ月の総予算を入力してください</InputLabel>
            <TextField
                fullWidth
                variant="outlined"
                color="primary"
                error={Boolean(errors.totalBadget)}
                helperText={errors.totalBadget?.message}
                disabled={registLoading}
                autoFocus
                {...register('totalBadget', validateRule.totalBadget)}
                InputProps={{
                    name: 'totalBadget',
                    style: { letterSpacing: '1px' },
                    startAdornment: (
                        <InputAdornment position="start">
                            <YenIcon color={Boolean(errors.totalBadget) ? 'error' : 'primary'} />
                        </InputAdornment>
                    )
                }}
                onChange={(e) => setValue('totalBadget', strEscape(e.target.value))}
            />

            <InputLabel className="pl-2 pt-5 text-xs text-gray-800">
                毎月支出額をリセットする日付を入力してください
            </InputLabel>
            <TextField
                fullWidth
                variant="outlined"
                color="primary"
                error={Boolean(errors.resetDate)}
                helperText={errors.resetDate?.message}
                disabled={registLoading}
                {...register('resetDate', validateRule.resetDate)}
                InputProps={{
                    name: 'resetDate',
                    style: { letterSpacing: '1px' },
                    startAdornment: (
                        <InputAdornment position="start">
                            <ResetDateIcon color={Boolean(errors.resetDate) ? 'error' : 'primary'} />
                        </InputAdornment>
                    ),
                    endAdornment: <InputAdornment position="end">日</InputAdornment>,
                    inputMode: 'numeric'
                }}
                onChange={(e) => setValue('resetDate', strEscape(e.target.value))}
            />

            <div className="pt-5">
                <Button
                    type="submit"
                    color="primary"
                    size="large"
                    variant="contained"
                    disableElevation
                    disabled={registLoading}
                    className="py-3 w-full md:py-2 lg:w-3/12"
                >
                    登録
                </Button>
            </div>
        </form>
    );
};
