import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import swal from 'sweetalert' ;

class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '' 
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value}) 
    }
    sweetMessageFunction = (e) => {
        swal({
            title: "Good job!",
            text: "Login operation is successful.You can now check logged in users!",
            icon: "success",
          });
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log("submit handler a girdi abi ")
        axios.post('http://localhost:8080/addUser',this.state)
        .then((response) =>{
            this.sweetMessageFunction();
            console.log(response.data) ;
            this.setState({
                username: '',
                password: '',
                email: '' 
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className = "card" style = {{maxWidth : "60%",margin:"left"}}>
                <h4 className = "card-header">User Login</h4>
                <div className = "card-body">
                    <form onSubmit = {this.submitHandler}>
                        <div className ="form-group">
                            <label htmlFor= "username">User Name</label>
                            <input onChange={this.changeHandler}
                            value={this.state.username}
                            type = "text" 
                            required
                            name = "username" 
                            id = "username" 
                            placeholder = "Enter the user name"
                            className = "form-control"/>
                        </div>
                        <div className ="form-group" >
                            <label htmlFor= "password">Password</label>
                            <input onChange= {this.changeHandler}
                            value={this.state.password}
                            type = "text" 
                            required
                            name = "password" 
                            id = "password" 
                            placeholder = "Enter the password"
                            className = "form-control"/>
                        </div>
                        <div className ="form-group" >
                            <label htmlFor= "email">Email</label>
                            <input onChange= {this.changeHandler}
                            value={this.state.email}
                            type = "text" 
                            required
                            name = "email" 
                            id = "email" 
                            placeholder = "Enter the email"
                            className = "form-control"/>
                        </div>
                        
                            <button 
                                type= "submit" 
                                className = "btn btn-success btn-block">
                                LOG IN
                            </button>
                     

                    </form>
                    <Link to = "/userTable">
                        <button className = "btn btn-warning">Logged In Users</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default UserLogin;