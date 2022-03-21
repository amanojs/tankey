import { NextPage } from 'next';
import Image from 'next/image';
import FridgeIcon from '../../assets/image/fridge.png';
import Card from '@mui/material/Card';
import SignInForm from '../../components/user/signin/SignInForm';
import Circle from '@mui/icons-material/CheckCircleTwoTone';
import { useAuthState } from 'utils/hooks/useAuthState';
import { useRouter } from 'next/router';
import { Loading } from 'components/user/Loading';

const signin: NextPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLogin, isLoading } = useAuthState();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    if (isLoading) return <Loading />;
    if (!isLoading && isLogin) {
        router.replace('/');
        return <></>;
    }
    return (
        <div className="w-full min-h-screen bg-slate-600 md:pt-8">
            <Card className="w-full min-h-screen p-10 md:w-2/4 md:min-h-full md:mx-auto">
                <h2 className="flex justify-center items-center pr-6">
                    <Circle color="primary" fontSize="medium" className="pr-1" />
                    サインイン
                </h2>
                <div className="mx-auto sm:w-2/6 md:w-4/6 lg:w-2/6 flex justify-center">
                    <Image src={FridgeIcon} alt="fridge_logo" />
                </div>
                <p className="text-gray-500 text-sm leading-6 py-4">{/* Tankeyは月ごとの目標 */}</p>
                <SignInForm />
            </Card>
        </div>
    );
};

export default signin;
