import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
//const {id} = useParams();

class ListEmployees extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
        this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
                this.setState({employees : res.data});
        });
    }

    render() {
        /*const {navigate1} =this.state;
        if (navigate1) {
            return <Navigate to="/UpdateEmployee/${id}" push={true} />;
          }*/
        return (
            <div>
                    <br></br>
                    <h2 className = "text-center" style={{color: 'black'}}>LIST OF EMPLOYEES</h2>
                    <br></br>
                    {/*<div className="row">
                       <Link to ="/AddEmployee">
                            <button className="btn btn-primary">Add new employee</button>
                        </Link>
                    </div>*/}
                    <div className = "row ">
                        <table className = "table table-lg table-bordered table-hover">
                            <thead class = "table-dark text-center">
                                <tr>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Employee Email ID</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.employees.map(
                                        employees =>
                                        <tr key = {employees.id}>
                                            <td class="text-center"> {employees.firstName} </td>
                                            <td class="text-center"> {employees.lastName} </td>
                                            <td class="text-center"> {employees.emailID} </td>
                                            <td class="text-center">
                                            <Link to ={`/UpdateEmployee/${employees.id}`}>
                                              <button className="btn btn-info" style={{marginLeft: "10px"}}>Update</button>
                                            </Link>
                                            <button onClick={ () => this.deleteEmployee(employees.id)} className="btn btn-danger" style={{marginLeft: "10px"}}>Delete</button>
                                            <Link to ={`/ViewEmployee/${employees.id}`}>
                                              <button className="btn btn-info" style={{marginLeft: "10px"}}>View</button>
                                            </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

export default ListEmployees;