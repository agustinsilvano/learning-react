import AppButton from 'components/shared/AppButton/AppButton';
import { useCallback, useContext } from 'react';
import { AuthContext } from 'store/context/auth-context';

const MyProfileButton: React.FC = () => {
	const ctx = useContext(AuthContext);

	const onLoginHandler = useCallback(() => {
		if (ctx.isAuthenticated) ctx.onLogout();
		else ctx.onLogin('agustin.silvano');
	}, [ctx.isAuthenticated]);

	return <AppButton title={ctx.userId || 'No user'} onClickCustom={onLoginHandler} />;
};

export default MyProfileButton;
