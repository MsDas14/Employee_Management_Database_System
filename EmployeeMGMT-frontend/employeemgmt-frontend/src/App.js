import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import ListEmployees from './Components/ListEmployees.jsx';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import ViewEmployee from './Components/ViewEmployee';

function App() {
  return (
    <div className="maincontainer">
      <HeaderComponent />
      <Router>
            <div className="container2"> 
              <Routes>
                    <Route exact path= "/" element={<Homepage />} />
                    <Route path= "/getEmployees" element={<ListEmployees />} />      
                    <Route path= "/AddEmployee" element={<AddEmployee />} />  
                    <Route path= "/UpdateEmployee/:id" element={<UpdateEmployee />} />
                    <Route path= "/ViewEmployee/:id" element={<ViewEmployee />} />          
              </Routes>
            </div>
          <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
