import './HomeButton.module.scss'
import AppButton from '../../../shared/AppButton/AppButton';

const HomeButton: React.FC = () => {
    const onClick = () => {
        console.log("hey!")
    }

    return (
        <AppButton
            title='Home'
            onClick={onClick} />
    )
}

export default HomeButton;