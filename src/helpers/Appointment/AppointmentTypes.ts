export const APPOINTMENT_TYPES = {
	HEALTH_CARE: {
		VALUE: 'Health-care',
		NEED_ATTENTION_DAYS: 2
	},
	PERSONNAL_MATTER: {
		VALUE: 'Personnal matter',
		NEED_ATTENTION_DAYS: 2
	},
	ACCOUNTING: {
		VALUE: 'Accounting',
		NEED_ATTENTION_DAYS: 2
	},
	OTHER: {
		VALUE: 'Other',
		NEED_ATTENTION_DAYS: 2
	}
};

export const APPOINTMENT_TYPES_LIST = Object.entries(APPOINTMENT_TYPES).map(([k, v]) => v);
