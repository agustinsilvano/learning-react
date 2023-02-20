import { IHasButtonType, IOnClick, IHasTitle } from 'interfaces/Common';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeStoreState } from 'store/theme-store';
import styles from './AppButton.module.scss';

interface IAppButton extends IHasTitle, IHasButtonType, IOnClick {
	disabled?: boolean;
}

const AppButton: React.FC<IAppButton> = ({
	title = 'Save',
	type,
	onClickCustom: onClick,
	disabled = false,
	...props
}: IAppButton) => {
	//Used to know the overall theme of the app.
	const theme = useSelector((state: any) => state.theme.name);

	return (
		<button
			className={`${styles.button} ${styles[theme]} ${disabled && styles.disabled}`}
			onClick={onClick}
			type={type}
			disabled={disabled}
			{...props}
		>
			{title}
		</button>
	);
};

export default React.memo(AppButton);
