import React, { Component } from 'react'
import {Link} from "react-router-dom"
class LoginScreen extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li style = {{color : "green", fontSize : "40px",margin: "40px"}}>
                        <Link to = "/alertForm">Alert Form</Link>
                    </li>
                    <li style = {{color : "green", fontSize : "40px",margin: "40px"}}>
                        <Link to = "/userLogin">User Login</Link>
                    </li>
                    <li style = {{color : "green", fontSize : "40px",margin: "40px"}}>
                        <Link to = "/alertTable">Alert List</Link>
                    </li>
                    <li style = {{color : "green", fontSize : "40px",margin: "40px"}}>
                        <Link to = "/userTable">Logged In Users</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default LoginScreen ;