import { IHasButtonType, IOnClick, IHasTitle } from '../../../interfaces/Common';
import styles from './AppButton.module.css'


interface IAppButton extends IHasTitle, IHasButtonType, IOnClick {
    disabled?: boolean;
}

const AppButton = ({ title = "Save", type, onClick, disabled = false, ...props }: IAppButton) => {

    return (
        <button className={`${styles.button} ${disabled && styles.disabled}`} onClick={onClick} type={type} disabled={disabled} {...props}>
            {title}
        </button >
    );
}

export default AppButton;