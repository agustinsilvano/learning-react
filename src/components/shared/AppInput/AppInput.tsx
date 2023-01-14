import { IHasId, IHasTitle, IHasType, IHasValue, IOnChange } from '../../../interfaces/Common';

interface IAppInput extends IHasId, IHasTitle, IHasType, IHasValue, IOnChange { }

const AppInput: React.FC<IAppInput> = ({ id, title, type, value, onChange, ...props }: IAppInput) => {
    return (
        <div>
            <label htmlFor={id}> {title}</label>
            <input
                id={id}
                type={type}
                onChange={onChange}
                value={value}
                {...props}
            />
        </div>
    )
}

export default AppInput;