import { useEffect, useState } from 'react';
import { APPOINTMENT_TYPES_LIST } from 'helpers/Appointment/AppointmentTypes';
import { IAppointmentItem } from 'components/Home/components/Appointment/AppointmentList/components/AppointmentItem/AppointmentItem';

//Custom hook used tho determine if the appointment need attention or not.
const useAppointmentNeedAttention = (appointment: IAppointmentItem) => {
	const [needAttention, setNeedAttention] = useState(false);

	useEffect(() => {
		const diffDays = Math.ceil(
			Math.abs(appointment.beginDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
		);

		//Get the appointment type of the repository list.
		const appointmentType = APPOINTMENT_TYPES_LIST.find((x) => x.VALUE === appointment.type);

		if (appointmentType) {
			//Need attention if the difference of the event and today is less than the value configured for the provided `type`.
			setNeedAttention(diffDays < appointmentType.NEED_ATTENTION_DAYS);
		}
	}, [appointment]);

	return needAttention;
};

export default useAppointmentNeedAttention;
