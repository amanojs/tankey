import type { NextPage } from 'next';
import Head from 'next/head';
import { useSaveUser } from 'architecture/applications/saveUser';
import { needUpdate } from 'architecture/domains/User';
import { useUserStorage } from 'architecture/util/ defaultService';
import { Loading } from 'components/user/Loading';
import SignInOrOutBtn from 'components/user/signin/SignInOrOutBtn';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'utils/hooks/useAuthState';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const { user } = useUserStorage();
    const { saveUser } = useSaveUser({ userStorageService: useUserStorage() });

    useEffect(() => {
        if (user) {
            console.log({ user, needupdate: needUpdate(user) });
        }
    }, [user]);

    const { isLogin, isLoading, userid } = useAuthState();
    const router = useRouter();

    useEffect(() => {
        if (isLogin && userid && user === undefined) {
            // 総予算と毎月のリセット日を設定するステップポップアップを表示
            saveUser(userid, 50000, 20);
        }
    }, [isLogin]);

    if (isLoading) return <Loading />;
    if (!isLoading && !isLogin) {
        router.replace('/user/signin');
        return <></>;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Tankey</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <SignInOrOutBtn />

            <main className={styles.main}>ステータス画面 {userid}</main>
        </div>
    );
};

export default Home;
