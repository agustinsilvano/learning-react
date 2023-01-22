import { IHasTitle } from 'interfaces/Common';
import styles from './AppToaster.module.scss'
import ReactDOM from 'react-dom';
import { ReactElement, useEffect, useState } from 'react';

interface IAppToaster extends IHasTitle {
    isError?: boolean;
    description?: string;
    visible?: boolean;
}

const AppToasterOverlay: React.FC<IAppToaster> = (props: IAppToaster) => {

    return (
        <div className={`${styles.toaster} ${props.isError ? styles.error : styles.success} ${!props.visible && styles.hidden}`}>
            <h3>
                {'Toaster message:' + (props.title || 'Success')}
            </h3>
            {props.description && <h5>{props.description}</h5>}
        </div>
    )
}

const AppToaster: React.FC<IAppToaster> = (props: IAppToaster) => {

    const [visibilityCountDown, setVisibilityCountDown] = useState(props.visible);

    //TODO: Configure dotenv module.
    const timeout: number = +(process.env.TOASTER_TIMEOUT || '3000');

    //useEffect used to hide the toaster message after X seconds;
    useEffect(() => {
        setTimeout(() => {
            setVisibilityCountDown(false);
        }, timeout);
    });

    const visible = props.visible && visibilityCountDown;

    const portalDiv: HTMLElement = document.getElementById('toaster-root')!;
    const toasterComponent: ReactElement<any, any> = <AppToasterOverlay
        title={props.title}
        isError={props.isError}
        visible={visible} />

    return (
        <>
            {ReactDOM.createPortal(toasterComponent, portalDiv)}
        </>
    )
}

export default AppToaster;