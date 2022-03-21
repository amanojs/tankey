import { NextPage } from 'next';
import RegisterForm from 'components/user/register/RegisterForm';
import { AuthProvider } from 'utils/providers/AuthProvider';

const register: NextPage = () => {
    return (
        <AuthProvider>
            <div className="flex justify-center items-center md:p-5 min-h-screen h-full bg-slate-700">
                <RegisterForm />
            </div>
        </AuthProvider>
    );
};

export default register;
