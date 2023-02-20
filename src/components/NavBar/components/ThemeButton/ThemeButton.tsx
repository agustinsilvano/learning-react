import AppButton from 'components/shared/AppButton/AppButton';
import { Themes } from 'helpers/themes';
import { useDispatch, useSelector } from 'react-redux';
import { themeActions } from 'store/theme-store';

const ThemeButton: React.FC = () => {
	const dispatch = useDispatch();

	const theme = useSelector((state: any) => state.theme.name);

	const onClickHandler = () => {
		const toggleTheme: Themes = theme === 'dark' ? 'light' : 'dark';

		dispatch(themeActions.updateTheme(toggleTheme));
	};

	return <AppButton title={theme} onClickCustom={onClickHandler} />;
};

export default ThemeButton;
