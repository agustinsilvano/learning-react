import { IHasChildrenElement, IOnSubmit } from '../../../interfaces/Common';
import './AppForm.css'

interface IAppForm extends IOnSubmit, IHasChildrenElement {
}

const AppForm: React.FC<IAppForm> = ({ onSubmit, children, ...props }: IAppForm) => {
    const onSubmitHandler = (event: React.FormEvent) => {
        //TODO: Investigate why this base preventDefault is not working.
        event.preventDefault();

        onSubmit(event);
    }

    return (
        <form onSubmit={onSubmitHandler} className="form" {...props}>
            {children}
        </form >
    )
}

export default AppForm;