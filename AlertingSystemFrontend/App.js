import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router , Route ,Switch ,Link} from "react-router-dom"
import AlertForm from './components/AlertForm' ;
import UserLogin from './components/UserLogin' ;
import NotFound from './components/NotFound' ;
import LoginScreen from './components/LoginScreen';
import Welcome from './components/Welcome';
import GetAlertsAndTable from './components/GetAlertsAndTable';
import StatusChart from './components/StatusChart';
import GetUsersAndTable from './components/GetUsersAndTable';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">         
          <Welcome/> 
          <Switch>
            <Route exact path = "/" component = {LoginScreen}/>
            <Route exact path = "/alertForm" component = {AlertForm}/>
            <Route exact path = "/userLogin" component = {UserLogin}/>
            <Route exact path = "/alertTable" component = {GetAlertsAndTable}/>
            <Route path="/getAlerts/:selectionId" component = {StatusChart} />
            <Route path="/userTable" component = {GetUsersAndTable}/>
            <Route component = {NotFound}/>
          </Switch>
          <Link to = "/">
            <button className = "btn btn-warning">Home Page</button>
          </Link>
          
        </div>
        <div className = "footer">
            <p style = {{fontSize : "25px"}}> &copy; All rights reserved by Onur ŞİMŞEK </p>
        </div>
      </Router>
    )
  }
}
export default App ;