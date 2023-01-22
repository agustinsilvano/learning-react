export class SearchAppointment {
	filter?: string;
	beginDate?: Date;
	endDate?: Date;

	/**
	 *
	 */
	constructor(filter: string = '', beginDate: Date = new Date(), endDate: Date = new Date()) {
		this.filter = filter;
		this.beginDate = beginDate;
		this.endDate = endDate;
	}
}
