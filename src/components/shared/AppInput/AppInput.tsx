import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { IHasId, IHasInputType, IHasTitle, IHasValue, IIsRequired, IOnBlur, IOnChange } from 'interfaces/Common';
import styles from './AppInput.module.scss'
import { DefaultInputValidator, InputValidator } from 'types/Validator';

interface IAppInput extends IHasId, IHasTitle, IHasInputType, IHasValue, IOnChange, IIsRequired, IOnBlur {
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
    | { type: 'INPUT_CHANGED', value: string }
    //Action used to detect the change on the focus and perform the validations.
    | { type: 'INPUT_BLUR' };

function inputReducer(state: AppInputState, action: AppInputAction): AppInputState {
    switch (action.type) {
        case 'INPUT_CHANGED':
            return new AppInputState(action.value, state.isValid, state.isRequired, state.validator);
        case 'INPUT_BLUR':
            let isValid = !state.isRequired || DefaultInputValidator(state.value);
            if (state.validator) isValid = isValid && state.validator(state.value);
            return new AppInputState(state.value, isValid, state.isRequired, state.validator);
    }
}

const DEBOUNCING_RATE: number = 1000; //1 sec

const AppInput: React.FC<IAppInput> = (props: IAppInput) => {
    const initialState = new AppInputState(props.value!, true, props.isRequired!, props.validator!);

    const [inputState, dispatchReducer] = useReducer(inputReducer, initialState);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //TODO: Check how to execute this handler.
        dispatchReducer({ type: 'INPUT_CHANGED', value: event.target.value })

        // props.onChange && props.onChange(event);
    }

    const onBlurHandler = () => {
        dispatchReducer({ type: 'INPUT_BLUR' })
    }


    useEffect(() => {
        const debouncer = setTimeout(() => {
            console.log("Performing validation...")
        }, DEBOUNCING_RATE);

        //Using the clean-up function to reset the timer.
        return () => {
            clearTimeout(debouncer);
        }

    },
        [inputState.isValid]);

    return (
        <div className={`${!inputState.isValid ? styles.invalid : ''}`} >
            <label htmlFor={`${props.id}`}> {`${props.title} ${props.isRequired ? '*' : ''}`}</label>
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