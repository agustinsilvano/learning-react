export class Appointment {
	id: string;
	title: string;
	beginDate: Date;
	endDate: Date;

	/**
	 *
	 */
	constructor(id: string, title: string, beginDate: Date, endDate: Date) {
		this.id = id;
		this.title = title;
		this.beginDate = beginDate;
		this.endDate = endDate;
	}
}
