import { IHasChildrenElement, IOnSubmit } from 'interfaces/Common';
import AppToaster from '../AppToaster/AppToaster';
import styles from './AppForm.module.scss'

interface IAppForm extends IOnSubmit, IHasChildrenElement {
}

const AppForm: React.FC<IAppForm> = ({ onSubmit, children, ...props }: IAppForm) => {

    const onSubmitHandler = (event: React.FormEvent) => {
        //TODO: Investigate why this base preventDefault is not working.
        event.preventDefault();

        onSubmit(event);

        //arbitrary logic to determine if there is error or not.
        if (Math.random() < 0.5) {
            throw new Error("Something went wrong, try again later...")
        }
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className="form" {...props}>
                {children}
            </form >
            <AppToaster
                title={"Success"}
                isError={false}
                visible={true}
            />
        </>
    )
}

export default AppForm;