import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import '../../config/firebase';

interface AuthState {
    isLogin: boolean;
    isLoading: boolean;
    userid: string | undefined;
    nickname: string | undefined;
    avatarUrl: string | undefined;
}

const INITIAL_AUTH_STATE: AuthState = {
    isLogin: false,
    isLoading: true,
    userid: undefined,
    nickname: undefined,
    avatarUrl: undefined
};

export function useAuthState(): AuthState {
    const [authState, setAuthState] = useState(INITIAL_AUTH_STATE);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                setAuthState({
                    isLogin: true,
                    isLoading: false,
                    userid: user.uid,
                    nickname: user.displayName || undefined,
                    avatarUrl: user.photoURL || undefined
                });
            } else {
                setAuthState({
                    ...INITIAL_AUTH_STATE,
                    isLoading: false
                });
            }
        });
        return () => unsubscribe();
    }, []);
    return authState;
}
