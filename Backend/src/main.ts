#!/usr/bin/env node

import * as express from "express";
import { EmployeeController } from "./Controllers/EmployeeController";
import { DBHandlerMw } from "./Middleware/middleware";

const app = (module.exports = express());
const cors = require('cors');

app.use("/", express.json());
app.use("/", DBHandlerMw() as express.RequestHandler);
app.use(cors());

app.post("/employees" , EmployeeController.employeePost);

app.get("/employees", EmployeeController.employeeGet);

app.put("/employees/:id" , EmployeeController.employeePut);

app.delete("/employees/:id" , EmployeeController.employeeDelete);


app.listen(3000);
console.log("Server listening on port 3000");
