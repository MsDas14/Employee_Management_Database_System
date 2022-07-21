import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Navigate } from 'react-router-dom'; 
import EmployeeService from '../Services/EmployeeService';

class AddEmployee extends Component {
    constructor(props){
        super(props)
            this.state = {
                navigate1: false,
                firstName: '',
                lastName: '',
                emailID: ''
            }
            this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
            this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
            this.changeEmailIDHandler = this.changeEmailIDHandler.bind(this);
            this.saveEmployee = this.saveEmployee.bind(this);
        }

        saveEmployee = (e) => {
            e.preventDefault();
            if(this.state.firstName === "" || this.state.lastName === "" || this.state.emailID === "") {
                alert("All the fields are mandatory");
                return;
            }
            let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailID: this.state.emailID};
            EmployeeService.AddEmployee(employee).then( res => {
                this.setState({firstName: "", lastName: "", emailID: ""});
                this.setState({navigate1: true});
            });          
        }

        
        changeFirstNameHandler= (event) => {
            this.setState({firstName: event.target.value});
        }
        changeLastNameHandler= (event) => {
            this.setState({lastName: event.target.value});
        }
        changeEmailIDHandler= (event) => {
            this.setState({emailID: event.target.value});
        }

    render() {
        const {navigate1} =this.state;
        if (navigate1) {
            return <Navigate to="/GetEmployees" push={true} />;
          }
        return (
            <div>
                <br></br>
                <br></br>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">ADD NEW EMPLOYEE</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="first-name" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="last-name" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <label> Email ID: </label>
                                        <input placeholder="Email Address" name="email-ID" className="form-control"
                                        value={this.state.emailID} onChange={this.changeEmailIDHandler}/>
                                    </div>
                                    <br></br>
                                    
                                        <button className="btn btn-success" onClick={this.saveEmployee}>SAVE</button>
                                    
                                    <Link to ="/">
                                        <button className="btn btn-danger" style={{marginLeft: "10px"}}>CANCEL</button>
                                    </Link>
                                    

                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default AddEmployee;