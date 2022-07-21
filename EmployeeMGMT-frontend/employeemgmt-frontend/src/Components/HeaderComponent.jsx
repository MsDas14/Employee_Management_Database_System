import React, { Component } from 'react';
import "bootstrap/js/src/collapse.js"


class HeaderComponent extends Component {
    constructor(props){
        super(props)
            this.state = {

            }
        }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#F9EEF2"}}>
                <div class="container-fluid">
                <a class="navbar-brand" href="/">
                <img src="https://icons-for-free.com/download-icon-home+house+icon-1320087051499461146_512.png" alt="Avatar Logo" style={{height:"30px", width:"30px "}} class="img-responsive"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" style={{color: "#0F0F0F"}} href="/AboutPage">About</a></li>
                    <li class="nav-item"><a class="nav-link" style={{color: "#0F0F0F"}} href="/getEmployees">Employees List</a></li>
                    <li class="nav-item"><a class="nav-link" style={{color: "#0F0F0F"}} href="/AddEmployee">Add Employee</a></li>
                    <li class="nav-item"><a class="nav-link" style={{color: "#0F0F0F"}} href="/ContactPage">Contacts</a></li>
                </ul>
                </div>
                </div>
        </nav>
        );
    }
}

export default HeaderComponent;