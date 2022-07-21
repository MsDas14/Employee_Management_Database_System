import React, { Component } from 'react';
import {useParams} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class ViewEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailID: ''
        }

    }

    componentDidMount(){
        let { id } = this.props.params;
        //console.log(id);
        EmployeeService.getEmployeeById(id).then((res) => {
            let employee = res.data;
                this.setState({
                    firstName : employee.firstName,
                    lastName : employee.lastName,
                    emailID : employee.emailID
                });
                //console.log("employee => " + JSON.stringify(employee))
                /*this.state.employee.map(
                    employee =>*/ 
        });
    }

    render() {
        return (
            <div>
                 <br></br>
                 <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee First Name: {this.state.firstName} </label>
                        </div>
                        <br></br>
                        <div className="row">
                            <label>Employee Last Name: {this.state.lastName} </label>
                        </div>
                        <br></br>
                        <div className="row">
                            <label>Employee Email ID: {this.state.emailID} </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withParams(ViewEmployee);