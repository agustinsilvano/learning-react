import { IHasButtonType, IHasOnClick, IHasTitle } from '../../../interfaces/Common';

interface IAppButton extends IHasTitle, IHasButtonType, IHasOnClick {
}

const AppButton = ({ title = "Save", type, onClick, ...props }: IAppButton) => {

    return (
        <button onClick={onClick} type={type} {...props}>
            {title}
        </button >
    );
}

export default AppButton;