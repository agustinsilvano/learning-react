import useAppointmentNeedAttention from 'hooks/useAppointmentNeedAttention';
import { IHasTitle, IHasType } from 'interfaces/Common';


export interface IAppointmentItem extends IHasTitle, IHasType {
    beginDate: Date;
    endDate: Date;
}

const AppointmentItem: React.FC<IAppointmentItem> = (props: IAppointmentItem) => {

    const needAttention = useAppointmentNeedAttention(props); 

    return (
        <>
            <h2>
                Title: {props.title}
            </h2>
            <h3>
                Type: {props.type}
            </h3>
            <div>
                At : {props.beginDate.toString()} - {props.endDate.toString()}
            </div>
            {needAttention && <h5>Need attention!</h5>}
        </>
    );
}

export default AppointmentItem;