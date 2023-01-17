import styled from 'styled-components';
import { IHasButtonType, IOnClick, IHasTitle } from '../../../interfaces/Common';


interface IAppButton extends IHasTitle, IHasButtonType, IOnClick {
}

//Using styled components.
const Button = styled.button`
font: inherit;
color: white;
background: white;
color: grey;
cursor: pointer;
border-color: #a8a8a8;
border-radius: 3px;

&:focus {
    outline: none;
}

&:hover,
&:active {
    background: green;
    border-color: white;
}
`;


const AppButton = ({ title = "Save", type, onClick, ...props }: IAppButton) => {

    return (
        <Button onClick={onClick} type={type} {...props}>
            {title}
        </Button >
    );
}

export default AppButton;