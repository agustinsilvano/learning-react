export class CreateUpdateAppointment {
	title: string;
	type: string;
	beginDate: Date;
	endDate: Date;

	/**
	 *
	 */
	constructor(title: string, type: string, beginDate: Date, endDate: Date) {
		this.title = title;
		this.type = type;
		this.beginDate = beginDate;
		this.endDate = endDate;
	}
}
