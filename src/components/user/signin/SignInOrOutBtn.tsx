import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { FC, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import '../../../config/firebase';
import { useAuthState } from 'utils/hooks/useAuthState';
import Link from 'next/link';

const SignInOrOutBtn: FC = () => {
    const { isLogin, isLoading, nickname } = useAuthState();

    useEffect(() => {
        console.log(nickname);
    });

    const judge = () => {
        if (isLoading) return <CircularProgress />;
        return isLogin ? (
            <Button onClick={() => signOut(getAuth())}>サインアウト</Button>
        ) : (
            <Link passHref href={'/user/signin'}>
                <Button>サインイン</Button>
            </Link>
        );
    };

    return judge();
};
export default SignInOrOutBtn;
