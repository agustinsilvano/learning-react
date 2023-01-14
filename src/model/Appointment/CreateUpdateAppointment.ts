export class CreateUpdateAppointment {
	title: string;
	beginDate: Date;
	endDate: Date;

	/**
	 *
	 */
	constructor(title, beginDate, endDate) {
		this.title = title;
		this.beginDate = beginDate;
		this.endDate = endDate;
	}
}
