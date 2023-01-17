import { APPOINTMENT_TYPES } from '../../helpers/Appointment/AppointmentTypes';
import { Appointment } from '../../models/Appointment/Appointment';
import NewAppointment from './components/Appointment/ NewAppointment/NewAppointment';
import AppointmentList from './components/Appointment/AppointmentList/AppointmentList';

const Home = () => {
    const appointments: Appointment[] = [
        new Appointment("1", "Doctor", APPOINTMENT_TYPES.HEALTH_CARE, new Date(2023, 1, 10), new Date(2023, 1, 10)),
        new Appointment("2", "Bank", APPOINTMENT_TYPES.ACCOUNTING, new Date(2023, 1, 11), new Date(2023, 1, 11))
    ]

    const onCreateNewAppointmentHandler = (appointment: Appointment) => {
        appointments.push(appointment);
    }

    return (
        <>
            <NewAppointment onCreate={onCreateNewAppointmentHandler}></NewAppointment>
            <AppointmentList
                items={appointments} />
        </>
    )
}

export default Home;