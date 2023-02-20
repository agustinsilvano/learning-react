import AppButton from 'components/shared/AppButton/AppButton';
import { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { AuthContext } from 'store/context/auth-context';
import { userActions, UserState } from 'store/user-store';

const MyProfileButton: React.FC = () => {
	// const ctx = useContext(AuthContext);

	// const onLoginHandler = useCallback(() => {
	// 	if (ctx.isAuthenticated) ctx.onLogout();
	// 	else ctx.onLogin('agustin.silvano');
	// }, [ctx.isAuthenticated]);

	// return <AppButton title={ctx.userId || 'No user'} onClickCustom={onLoginHandler} />;

	const dispatch = useDispatch();
	const user = useSelector((state: UserState) => state);

	const onLoginHandler = useCallback(() => {
		if (user.isAuthenticated) dispatch(userActions.logout());
		else dispatch(userActions.login({ userId: 'agustin.silvano', roles: ['admin'] }));
	}, []);

	return <AppButton title={user.userId || 'No user'} onClickCustom={onLoginHandler} />;
};

export default MyProfileButton;
