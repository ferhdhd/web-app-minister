import { EmployeeInfo } from "./Classes/Employee";

export class InfHandler {
    public static employee(obj: any): EmployeeInfo {
        if (obj.id === undefined) {
            throw new TypeError ("Undefined ID");
        }

        if (obj.name === undefined) {
            throw new TypeError ("Undefined name");
        }

        if (obj.surname === undefined) {
            throw new TypeError ("Undefined surname");
        }

        if (obj.phone === undefined) {
            throw new TypeError ("Undefined phone");
        }

        if (obj.extension === undefined) {
            throw new TypeError ("Undefined extension");
        }

        if (obj.photo_file === undefined) {
            throw new TypeError ("Undefined photo file");
        }

        if (obj.email === undefined) {
            throw new TypeError ("Undefined email");
        }

        if (obj.job_position === undefined) {
            throw new TypeError ("Undefined job position");
        }

        if (obj.schedule === undefined) {
            throw new TypeError ("Undefined schedule");
        }

        const info: EmployeeInfo = {
            id: obj.id,
            name: obj.name,
            surname: obj.surname,
            phone: obj.phone,
            extension: obj.extension,
            photo_file: obj.photo_file,
            email: obj.email,
            job_position: obj.job_position,
            begin_to_work: obj.begin_to_work,
            finished_to_work: obj.finished_to_work,
            schedule: obj.schedule
        };

        return info;
    }

}