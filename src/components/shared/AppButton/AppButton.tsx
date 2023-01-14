import Button from 'react-bootstrap/Button';

const AppButton = ({ text = "Save", type, onClick, asLink = false, ...props }) => {

    return (
        <button onClick={onClick} type={type} {...props}>
            {text}
        </button >
    );
}

export default AppButton;