export class DateService {

	private dateDifference: number;
	private dateInMs: Date;

 	calculateYear(date: Date): number {
		this.dateDifference = Date.now() - date.getTime();
		this.dateInMs = new Date(this.dateDifference);
		return Math.abs(this.dateInMs.getUTCFullYear() - 1970);
	}

	isDayOfWeek(date: Date, day: DayOfWeek): boolean {
 		if (date.getDay() === day) {
 			return true;
		} else {
 			return false;
		}

	}

}

export enum DayOfWeek {
	Monday = 1,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday
}
