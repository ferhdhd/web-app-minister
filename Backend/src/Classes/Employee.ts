import { Schedule } from "./Schedule"

export interface EmployeeInfo {
    id?: number,
    name: string,
    surname: string,
    phone: number,
    extension: number,
    photo_file: string,
    email: string,
    job_position: string,
    begin_to_work: object,
    finished_to_work: object,
    schedule: Schedule
}

export class Employee {
    public readonly id: number;
    public readonly name: string;
    public readonly surname: string;
    public readonly phone: number;
    public readonly extension: number;
    public readonly photo_file: string;
    public readonly email: string;
    public readonly job_position: string;
    public readonly begin_to_work: object;
    public readonly finished_to_work: object;
    public readonly schedule: Schedule;

    constructor(ei: EmployeeInfo) {
        this.id = ei.id;
        this.name = ei.name;
        this.surname = ei.surname;
        this.phone = ei.phone;
        this.extension = ei.extension;
        this.photo_file = ei.photo_file;
        this.email = ei.email;
        this.job_position = ei.job_position;
        this.begin_to_work = ei.begin_to_work;
        this.finished_to_work = ei.finished_to_work;
        this.schedule = ei.schedule;
    }
} 