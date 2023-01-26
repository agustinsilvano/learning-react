import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { IHasId, IHasTitle, IHasType, IHasValue, IIsRequired, IOnChange } from 'interfaces/Common';
import styles from './AppInput.module.scss'
import { DefaultInputValidator, InputValidator } from 'types/Validator';

interface IAppInput extends IHasId, IHasTitle, IHasType, IHasValue, IOnChange, IIsRequired {
    ref?: React.RefObject<HTMLInputElement>;
    validator?: InputValidator;
}

class AppInputState {
    value: string;
    isValid: boolean;
    isRequired: boolean;
    validator: InputValidator;


    /**
     *
     */
    constructor(value: string, isValid: boolean, isRequired: boolean, validator: InputValidator) {
        this.value = value;
        this.isValid = isValid;
        this.isRequired = isRequired;
        this.validator = validator;
    }
}

type AppInputAction =
    //Action used to capture the user inputs.
    | { type: 'USER_INPUT', value: string }
    //Action used to detect the change on the focus and perform the validations.
    | { type: 'USER_BLUR' };

function inputReducer(state: AppInputState, action: AppInputAction): AppInputState {
    switch (action.type) {
        case 'USER_INPUT':
            return new AppInputState(action.value, state.isValid, state.isRequired, state.validator);
        case 'USER_BLUR':
            let isValid = !state.isRequired || DefaultInputValidator(state.value);
            if (state.validator) isValid = isValid && state.validator(state.value);
            return new AppInputState(state.value, isValid, state.isRequired, state.validator);
    }


}

const AppInput: React.FC<IAppInput> = (props: IAppInput) => {
    const initialState = new AppInputState(props.value!, true, props.isRequired!, props.validator!);

    const [inputState, dispatchReducer] = useReducer(inputReducer, initialState);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //TODO: Check how to execute this handler.
        dispatchReducer({ type: 'USER_INPUT', value: event.target.value })

        // props.onChange && props.onChange(event);
    }

    const onBlurHandler = () => {
        //TODO: Check how to execute this handler.
        dispatchReducer({ type: 'USER_BLUR' })
    }

    //Debounce logic, keep it commented to keep track of this change.
    // const [isValid, setIsValid] = useState(true);
    // const [value, setValue] = useState(props.value);
    // const DEBOUNCING_RATE: number = 1000; //1 sec
    // useEffect(() => {
    //     //Debouncing the input to perform the validations. 
    //     const debouncer = setTimeout(() => {
    //         //Set as valid if the field isnt required or if pass the validation.
    //         setIsValid(!props?.isRequired || DefaultInputValidator(value!));

    //         //If there is an external validator, execute it.
    //         if (props.validator) {
    //             setIsValid(props.validator(value!));
    //         }
    //     }, DEBOUNCING_RATE);

    //     //Using the clean-up function to reset the timer.
    //     return () => {
    //         clearTimeout(debouncer);
    //     }

    // }, [value])



    return (
        <div className={`${!inputState.isValid ? styles.invalid : ''}`} >
            <label htmlFor={`${props.id}`}> {`${props.title} ${props.isRequired ? '*' : ' '}`}</label>
            <input
                id={`${props.id}`}
                type={props.type}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                value={props.value}
                ref={props.ref}
                {...props}
            />
        </div >
    )
}

export default AppInput;