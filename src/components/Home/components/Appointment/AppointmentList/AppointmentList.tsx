import { useCallback, useEffect, useState } from 'react';
import { IReadEntity } from 'interfaces/Entity';
import { Appointment } from 'models/Appointment/Appointment';
import { SearchAppointment } from 'models/Appointment/SearchAppointment';
import AppEmptyCollection from 'components/shared/AppEmptyCollection/AppEmptyCollection';
import AppointmentFilter from './components/AppointmentFilter/AppointmentFilter';
import AppointmentItem from './components/AppointmentItem/AppointmentItem';


interface IAppointmentList extends IReadEntity<Appointment> {
}


const AppointmentList: React.FC<IAppointmentList> = ({ items }: IAppointmentList) => {
    const [appointments, setAppointments] = useState<Appointment[]>(items);

    useEffect(() => {
        setAppointments(items);
    }, [items])

    const listPayload = appointments?.length === 0 ?
        <AppEmptyCollection /> :
        appointments?.map(a => (
            <AppointmentItem
                key={a.id}
                title={a.title}
                type={a.type}
                beginDate={a.beginDate}
                endDate={a.endDate} />
        ));

    //Using callback to store the function and use the under the hood Appointment Filter memo component.
    const onFiltersChangeHandler = useCallback((filter: SearchAppointment) => {
        //Call the service with the filter object.
        console.table(filter);
    }, []);

    return (
        <>
            <AppointmentFilter onSearch={onFiltersChangeHandler} />
            {listPayload}
        </>
    )

}

export default AppointmentList;