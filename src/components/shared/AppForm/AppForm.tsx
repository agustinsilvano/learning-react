import { IHasChildrenElement, IOnSubmit } from 'interfaces/Common';
import { useState } from 'react';
import AppToaster from '../AppToaster/AppToaster';
import styles from './AppForm.module.scss'

interface IAppForm extends IOnSubmit, IHasChildrenElement {
}

const AppForm: React.FC<IAppForm> = ({ onSubmit, children, ...props }: IAppForm) => {

    const [isError, setIsError] = useState(false);

    const onSubmitHandler = (event: React.FormEvent) => {
        //TODO: Investigate why this base preventDefault is not working.
        event.preventDefault();

        onSubmit(event);
    }

    return (
        <>
            <form onSubmit={onSubmitHandler} className="form" {...props}>
                {children}
            </form >
            <AppToaster
                title={`${isError ? "Error" : "Success"}`}
                isError={isError}
                visible={true}
            />
        </>
    )
}

export default AppForm;