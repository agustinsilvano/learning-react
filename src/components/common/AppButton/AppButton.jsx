import Button from 'react-bootstrap/Button';

const AppButton = ({ text, onClick, variant = 'secondary', asLink = false }) => {
    const asButton = asLink ? 'a' : null;

    return (
        <div>
            <Button onClick={onClick}>
                {text}
            </Button>
        </div>
    );
}

export default AppButton;