export interface ScheduleInfo {
    id?: number,
    mon: any,
    tue: any,
    wed: any,
    thu: any,
    fri: any
}

export class Schedule {
    public readonly id: number
    public readonly mon: any;
    public readonly tue: any;
    public readonly wed: any;
    public readonly thu: any;
    public readonly fri: any;

    constructor(si: ScheduleInfo) {
        this.id = si.id;
        this.mon = si.mon;
        this.tue = si.tue;
        this.wed = si.wed;
        this.thu = si.thu;
        this.fri = si.fri;
    }

}