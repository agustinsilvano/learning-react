import AppButton from 'components/shared/AppButton/AppButton';
import { useContext } from 'react';
import { AuthContext } from 'store/auth-context';

const MyProfileButton: React.FC = () => {
    const ctx = useContext(AuthContext);

    const onLoginHandler = () => {
        if (ctx.isAuthenticated)
            ctx.onLogout();
        else
            ctx.onLogin('agustin.silvano');
    }

    return (
        <AppButton
            title={ctx.userId || 'No user'}
            onClick={onLoginHandler} />
    )
}

export default MyProfileButton;