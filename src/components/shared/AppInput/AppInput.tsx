import { ChangeEvent, useState } from 'react';
import { IHasId, IHasTitle, IHasType, IHasValue, IIsRequired, IOnChange } from 'interfaces/Common';
import styles from './AppInput.module.scss'

interface IAppInput extends IHasId, IHasTitle, IHasType, IHasValue, IOnChange, IIsRequired {
    ref?: React.RefObject<HTMLInputElement>;
}

const AppInput: React.FC<IAppInput> = ({ id, title, type, value, onChange, isRequired = false, ref, ...props }: IAppInput) => {

    const [isValid, setIsValid] = useState(true);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (isRequired)
            setIsValid(event.target.value.trim().length !== 0);

        onChange && onChange(event);
    }

    return (
        <div className={`${!isValid ? 'invalid' : ''}`} >
            <label htmlFor={id}> {`${title} ${isRequired ? '*' : ''}`}</label>
            <input
                id={id}
                type={type}
                onChange={onChangeHandler}
                value={value}
                ref={ref}
                {...props}
            />
        </div >
    )
}

export default AppInput;