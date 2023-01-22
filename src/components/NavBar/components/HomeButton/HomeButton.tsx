import './HomeButton.css'
import AppButton from '../../../shared/AppButton/AppButton';

const HomeButton = () => {
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