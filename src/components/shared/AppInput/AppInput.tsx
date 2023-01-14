import { IHasId, IHasTitle, IHasType, IHasValue, IOnChange } from '../../../interfaces/Common';

interface IAppInput extends IHasId, IHasTitle, IHasType, IHasValue, IOnChange {
}


const AppInput = (props: IAppInput) => {
    return (
        <div>
            <label htmlFor={props.id}> {props.title}</label>
            <input
                id={props.id}
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                {...props}
            />
        </div>
    )
}

export default AppInput;