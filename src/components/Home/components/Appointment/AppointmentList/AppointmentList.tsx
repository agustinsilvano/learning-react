import { useEffect, useState } from 'react';
import { IReadEntity } from '../../../../../interfaces/Entity';
import { Appointment } from '../../../../../models/Appointment/Appointment';
import { SearchAppointment } from '../../../../../models/Appointment/SearchAppointment';
import AppEmptyCollection from '../../../../shared/AppEmptyCollection/AppEmptyCollection';
import AppointmentFilter from './components/AppointmentFilter/AppointmentFilter';
import AppointmentItem from './components/AppointmentItem/AppointmentItem';


interface IAppointmentList extends IReadEntity<Appointment> {
}


const AppointmentList = ({ items }: IAppointmentList) => {
    const [appointments, setAppointments] = useState<Appointment[]>(items);

    useEffect(() => {
        setAppointments(items);
    }, [items])

    const listPayload = appointments?.length == 0 ?
        <AppEmptyCollection /> :
        appointments?.map(a => (
            <AppointmentItem
                key={a.id}
                title={a.title}
                type={a.type}
                beginDate={a.beginDate}
                endDate={a.endDate} />
        ));


    const onFiltersChangeHandler = (filter: SearchAppointment) => {
        //Call the service with the filter object.
        console.table(filter);
    }

    return (
        <>
            <AppointmentFilter onSearch={onFiltersChangeHandler} />
            {listPayload}
        </>
    )

}

export default AppointmentList;