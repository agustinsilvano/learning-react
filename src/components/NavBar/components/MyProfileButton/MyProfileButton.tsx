import AppButton from 'components/shared/AppButton/AppButton';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { userActions } from 'store/user-store';

const MyProfileButton: React.FC = () => {

	const dispatch = useDispatch();
	const user = useSelector((state:RootState) => state.user);

	const onLoginHandler = useCallback(() => {
		if (user.isAuthenticated) dispatch(userActions.logout());
		else dispatch(userActions.login({ userId: 'agustin.silvano', roles: ['admin'] }));
	}, [dispatch, user.isAuthenticated]);

	return <AppButton title={user.userId || 'Login'} onClickCustom={onLoginHandler} />;
};

export default MyProfileButton;
