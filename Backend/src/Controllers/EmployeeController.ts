import * as express from "express";
import { Employee } from "../Classes/Employee";
import { InfHandler } from "../InfoHandler";
import { Request } from "../Middleware/middleware";

export class EmployeeController {
    public static employeePost(req: Request, res: express.Response) {
        try {
            
            const employee: Employee = new Employee(InfHandler.employee(req.body));
            req.db.createEmployee(employee);
        } catch (err) {
            res.status(400).json(`Employee creation error. ${err.mesage}`);
        }

        res.json("A employee was added with success");
        
    }

    public static employeeGet(req: Request, res: express.Response) {
        let employees: Employee[] = [];
        try {
            employees = req.db.listEmployees();
        } catch (err) {
            res.status(400).json("Employee listing error");
        }

        res.json(employees);
    }

    public static employeePut(req: Request, res: express.Response) {
        let id: number = Math.abs(parseInt(req.params.id));
        try {
            const employee: Employee = new Employee (InfHandler.employee(req.body));
            req.db.updateEmployee(id, employee);
        } catch (err) {
            res.status(400).json(`Update employee error ${err.message}`);
        }
    
        res.json("Employee updated with success");
    }
    
    public static employeeDelete(req: Request, res: express.Response) {
        let id: number = Math.abs(parseInt(req.params.id));
        try {
            req.db.deleteEmployee(id);
        } catch (err) {
            res.status(400).json(`Delete employee error ${err.message}`);
        }
    
        res.json("Employee deleted with success");
    }
}