import { Schedule } from "./Classes/Schedule";
import { ScheduleInfo } from "./Classes/Schedule";
import { Employee } from "./Classes/Employee";
import { EmployeeInfo } from "./Classes/Employee";

export class DBHandler {
    private employees: Employee[];

    constructor() {
        
        const ei: EmployeeInfo[] = this.seedEi();
    
        this.employees = [
            new Employee(ei[0]),
            new Employee(ei[1]),
            new Employee(ei[2]),
            new Employee(ei[3])
        ];
    }

    private seedEi() : EmployeeInfo[] {
        const ei: EmployeeInfo[] = [];
        const scheduleExample: Schedule = new Schedule ( {

                mon: {
                    "11h00": {
                        description:"Reunião com deputado Z",
                        duration: "1h"
                    }
                },
                tue:{
                    "12h00":{
                        description: "Almoço com o presidente da república",
                        duration: "2h"
                    }
                },
                wed:{
                    "13h": {
                        description: "Reunião geral da divisão X1",
                        duration: "2h"
                    }
                },
                "thu":{
                    "21h": {
                        description: "Voo para Paris - Cúpula Internacional de desenvolvimento ABC"
                    }
                },
                fri:{
                    "10h": {
                        description: "Apresentação do plano brasileiro para a Cúpula",
                        duration: "2h"
                    },
                    "12h":{
                        description: "Almoço com delegação alemã",
                        duration: "1h30"
                    },
                    "15h":{
                        description: "Reunião com ministério francês X",
                        duration: "1h"
                    },
                    "17h": {
                        description:"Reunião com delegação italiana",
                        duration: "1h30"
                    },
                    "21h":{
                        description: "Jantar com delegação chinesa",
                        duration: "2h"
                    }
                }
            } );

        ei[0] = {
            id: 0,
            name: "Fernando",
            surname: "Gbur dos Santos",
            phone: 40028922,
            extension:123,
            photo_file : "https://pbs.twimg.com/profile_images/413363822301179904/_YqLJz7F_400x400.jpeg",
            email: "fernando_gbur@hotmail.com",
            job_position: "Estagiário",
            begin_to_work: {
                mon: "07h00",
                tue: "07h02",
                wed: "07h32",
                thu: "07h21",
                fri: "07h12"
            },
            finished_to_work: {
                mon: "18h00",
			    tue: "18h02",
			    wed: "19h00",
			    thu: "18h45",
		        fri: "18h03"
            },
            schedule: scheduleExample
        };

        ei[1] = {
            id: 1,
            name: "Pedro",
            surname: "Willian Aguiar",
            phone: 33333333,
            extension: 321,
            photo_file: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4h46V3_qdvjQKMdyLGx7DJL-uPNJ9M68XEA&usqp=CAU",
            email: "pedro_willian@hotmail.com",
            job_position: "Estagiário",
            begin_to_work:{
                mon: "07h00",
                tue: "07h02",
                wed: "07h32",
                thu: "07h21",
                fri: "07h12"
            },
            finished_to_work: {
                mon: "18h32",
                tue: "18h52",
                wed: "18h55",
                thu: "18h41",
                fri: "18h00"
            },
            schedule: scheduleExample
        }

        ei[2] = {
            id: 2,
            name: "Diogo",
            surname: "Almeida",
            phone: 22222222,
            extension: 333,
            photo_file: "https://64.media.tumblr.com/9ca5e3c5076552331c761d669530f08b/2e837a843c79e57c-02/s400x600/b0fee504a43200627884259504b3629a2c845046.pnj",
            email: "diogoalmeida@gmail.com",
            job_position: "Estagiário",
            begin_to_work:{
                mon: "07h00",
                tue: "07h02",
                wed: "07h32",
                thu: "07h21",
                fri: "07h12"
            },
            finished_to_work: {
                mon: "18h32",
                tue: "18h52",
                wed: "18h55",
                thu: "18h41",
                fri: "18h00"
            },
            schedule: scheduleExample
        }

        ei[3] = {
            id: 3,
            name:"Guiusepe",
            surname: "Oneda",
            phone: 77777777,
            extension: 555,
            photo_file: "data:image/jpeg;base64,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",
            email: "guiusa.soca-fofo@gmail.com",
            job_position: "Estagiário",
            begin_to_work:{
                mon: "07h00",
                tue: "07h02",
                wed: "07h32",
                thu: "07h21",
                fri: "07h12"
            },
            finished_to_work: {
                mon: "18h32",
                tue: "18h52",
                wed: "18h55",
                thu: "18h41",
                fri: "18h00"
            },
            schedule: scheduleExample
        }
        
        return ei;
    }

    public createEmployee(employee: Employee) {
         if (this.employees.find((em) => employee.id === em.id)) {
            throw new Error ("ID already exists");
        }
 
        this.employees.push(employee);
    }

    public listEmployees() : Employee[] {
        return this.employees;
    }

    public showEmployee(id: number) : Employee {
        let i: number;
        let flag: boolean = true;
        for(i = 0; i < this.employees.length; i++) {
            if (id === this.employees[i].id) {
                flag = false;
                return this.employees[i];
            }
        }
    
        if (flag) {
            throw new Error ("ID not found");
        }
    }
    
    public updateEmployee(id: number, employee: Employee) {
        let i: number;
        let flag: boolean = true;
        for(i = 0; i < this.employees.length; i++)
            if (id === this.employees[i].id) {
                this.employees.splice(i, 1, employee);
                flag = false;
                break;
            }
        if (flag) {
            throw new Error ("ID not found");
        }
    } 

    public deleteEmployee(id: number) {
        let i: number;
        let flag: boolean = true;
        for(i = 0; i < this.employees.length; i++)
            if (id === this.employees[i].id) {
                this.employees.splice(i, 1);
                flag = false;
                break;
            }
        if (flag) {
            throw new Error ("ID not found");
        }
    }
}
