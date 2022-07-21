import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee/getEmployees";

class EmployeeServices {
    
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    AddEmployee(employee){
        return axios.post("http://localhost:8080/api/employee/newEmployee", employee);
    }

    getEmployeeById(employeeID){
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' +employeeID);
    }

    updateEmployee(employee, employeeID){
        return axios.put("http://localhost:8080/api/employee/Employee/"+employeeID, employee);
    }

    deleteEmployee(employeeID){
        return axios.delete("http://localhost:8080/api/employee/Employee/"+employeeID);
    }
}

export default new EmployeeServices()