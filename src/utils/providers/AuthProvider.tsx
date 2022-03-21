import { Loading } from 'components/user/Loading';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useAuthState } from 'utils/hooks/useAuthState';

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
    const { isLogin, isLoading } = useAuthState();
    const router = useRouter();

    console.log(isLogin);

    // TODO: Loadingコンポーネントを作成
    if (isLoading) return <Loading />;

    if (!isLogin) {
        router.replace('/user/signin');
        return <></>;
    } else {
        return children;
    }
};
