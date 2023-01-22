import { IHasTitle } from 'interfaces/Common';
import styles from './AppEmptyCollection.module.scss'

interface IAppEmptyCollection extends IHasTitle {
    subtitle?: string;
}

const AppEmptyCollection: React.FC<IAppEmptyCollection> = ({ title, subtitle }) => {
    return (
        <>
            <h2>{title || 'No results found.'}</h2>
            <p>{subtitle || 'Try with different parameters.'}</p>
        </>

    )
}

export default AppEmptyCollection;