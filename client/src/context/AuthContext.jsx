/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { getUser } from '../services/utility';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setState] = useState(() => {
        const localStorageState = localStorage.getItem('user');
        if (localStorageState) {
            const hasState = JSON.parse(localStorageState);

            return hasState;
        }

        return '';
    });

    const setUser = () => {
        setState(getUser());
    };


    const onLogout = () => {
        setState('');
        // sessionStorage.removeItem('search');
    };

    const contextValues = {
        setUser,
        onLogout,
        user
    };

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};