export class CreateUpdateAppointment {
	title: string;
	beginDate: Date;
	endDate: Date;

	/**
	 *
	 */
	constructor(title: string, beginDate: Date, endDate: Date) {
		this.title = title;
		this.beginDate = beginDate;
		this.endDate = endDate;
	}
}
