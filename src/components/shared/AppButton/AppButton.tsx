import { IHasButtonType, IOnClick, IHasTitle } from 'interfaces/Common';
import React from 'react';
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
	return (
		<button
			className={`${styles.button} ${disabled && styles.disabled}`}
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
