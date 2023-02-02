export const APPOINTMENT_TYPES = {
	HEALTH_CARE: 'Health-care',
	PERSONNAL_MATTER: 'Personnal matter',
	ACCOUNTING: 'Accounting',
	OTHER: 'Other'
};

export const APPOINTMENT_VALUES_LIST = Object.entries(APPOINTMENT_TYPES).map(([k, v]) => v);
