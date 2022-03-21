import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { auth } from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'config/firebase';
import { FC } from 'react';

const uiConfig: auth.Config = {
    signInFlow: 'redirect',
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
    signInSuccessUrl: '/'
};

const SignInForm: FC = () => {
    return <StyledFirebaseAuth firebaseAuth={getAuth()} uiConfig={uiConfig} />;
};

export default SignInForm;
