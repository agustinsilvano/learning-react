import { APPOINTMENT_TYPES } from './AppointmentTypes';

export default class AppointmentColorMapper {
	public static Map = (key: string) => {
		switch (key) {
			case APPOINTMENT_TYPES.ACCOUNTING.VALUE:
				return 'red';
			case APPOINTMENT_TYPES.HEALTH_CARE.VALUE:
				return 'grey';
			case APPOINTMENT_TYPES.OTHER.VALUE:
				return 'azure';
			case APPOINTMENT_TYPES.PERSONNAL_MATTER.VALUE:
				return 'beige';
			default:
				return 'white';
		}
	};
}
