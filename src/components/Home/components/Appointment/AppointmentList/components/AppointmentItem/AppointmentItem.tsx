import { IHasTitle, IHasType } from 'interfaces/Common';


interface IAppointmentItem extends IHasTitle, IHasType {
    beginDate: Date;
    endDate: Date;
}

const AppointmentItem = (props: IAppointmentItem) => {

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

        </>
    );
}

export default AppointmentItem;