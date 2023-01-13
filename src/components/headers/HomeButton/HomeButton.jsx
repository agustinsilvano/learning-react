import './HomeButton.css'
import AppButton from '../../common/AppButton/AppButton';

const HomeButton = () => {
    const onClick = () => {
        console.log("hey!")
    }

    return (
        <AppButton
            text="Home"
            onClick={onClick}
            asLink />
    )
}

export default HomeButton;