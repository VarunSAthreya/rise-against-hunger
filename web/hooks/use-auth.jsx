import { destroyCookie, setCookie } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';
import firebase from '../lib/firebase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null);
                destroyCookie(undefined, 'token');
            } else {
                const token = await user.getIdToken();
                setUser(user);
                setCookie(undefined, 'token', token, {
                    maxAge: 30 * 24 * 60 * 60,
                    path: '/',
                });
            }
        });
    }, []);

    useEffect(() => {
        const handleTokenRefresh = setInterval(async () => {
            const user = firebase.auth().currentUser;
            if (user) {
                await user.getIdToken(true);
            }
        }, 10 * 60 * 1000);

        return () => clearInterval(handleTokenRefresh);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
}
