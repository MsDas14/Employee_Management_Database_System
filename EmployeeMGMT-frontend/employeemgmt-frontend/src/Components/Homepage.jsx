import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import '../../src/Images/emp-1.jpg';

class Homepage extends Component {
    constructor(props){
        super(props)

        this.state = {
        }
    }
    render() {
        return (
            <div className="home">
                <h1 className = "text-center" style={{color: 'royalblue', fontFamily: 'Brush Script MT'}}>Employee Database Management System</h1>
                   {/* <div className="row">
                       <Link to ="/getEmployees">
                            <button className="btn btn-primary">View Employees List</button>
                        </Link>
                    </div> */}
            </div>
        );
    }
}

export default Homepage;