import { APPOINTMENT_TYPES } from './AppointmentTypes';

export default class AppointmentColorMapper {
	public static Map = (key: string) => {
		switch (key) {
			case APPOINTMENT_TYPES.ACCOUNTING:
				return 'red';
			case APPOINTMENT_TYPES.HEALTH_CARE:
				return 'grey';
			case APPOINTMENT_TYPES.OTHER:
				return 'azure';
			case APPOINTMENT_TYPES.PERSONNAL_MATTER:
				return 'beige';
			default:
				return 'white';
		}
	};
}
