import AppButton from 'components/shared/AppButton/AppButton';
import { useCallback, useContext } from 'react';
import { AuthContext } from 'store/auth-context';

const MyProfileButton: React.FC = () => {
    const ctx = useContext(AuthContext);

    const onLoginHandler = useCallback(() => {
        if (ctx.isAuthenticated)
            ctx.onLogout();
        else
            ctx.onLogin('agustin.silvano');
    }, [ctx.isAuthenticated]);

    return (
        <AppButton
            title={ctx.userId || 'No user'}
            onClick={onLoginHandler} />
    )
}

export default MyProfileButton;