import { IAuthContext } from 'interfaces/AuthContext';
import { IHasChildrenElement } from 'interfaces/Common';
import React, { useState } from 'react'

interface IAuthContextProvider extends IHasChildrenElement {
}

const initialContext: IAuthContext = {
    userId: null,
    roles: [],
    isAuthenticated: false,
    onLogin: () => { },
    onLogout: () => { },
};

export const AuthContext: React.Context<IAuthContext> = React.createContext<IAuthContext>(initialContext);

const AuthContextProvider = (props: IAuthContextProvider) => {

    const [loggedIn, setLoggedIn] = useState(false);

    const onLoginHandler = (s: string) => {
        localStorage.setItem('user', s);
        setLoggedIn(true);
    }

    const onLogoutHandler = () => {
        localStorage.removeItem('user');
        setLoggedIn(false);
    }

    return <AuthContext.Provider value={
        {
            ...initialContext,
            isAuthenticated: loggedIn,
            userId: localStorage.getItem('user'),
            onLogin: onLoginHandler,
            onLogout: onLogoutHandler
        }}>
        {props.children}
    </AuthContext.Provider>

}

export default AuthContextProvider;