import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom' 
import swal from 'sweetalert' ;

class GetUsersAndTable extends Component {
    state = {
        users : [] 
    };
    componentDidMount(){
        console.log("Did mount'a girdi..") ;
        this.retrieveUserData();
    }
    retrieveUserData(){
        axios.get('http://localhost:8080/getUsers')
        .then((response) => {
            this.setState({users : response.data});
        }) ;
    }
    deleteUsers(id){
        swal ({
            title : "Are you sure ?",
            text : "If you delete, you can't reach this user again!",
            icon :"warning" ,
            buttons : true ,
            dangerMode : true
        })
        .then((willDelete) => {
            if (willDelete){
                axios.delete('http://localhost:8080/deleteUser/'+id)
                .then((response)=>{
                    console.log("Delete ın icindeyim abi" + response.data) ;
                    this.retrieveUserData();
                    swal({
                        title : "Good Job!",
                        text : "User is deleted!",
                        icon :"success" ,
                    })
        
                })
            }
            else {
                swal("User is not deleted!")
            }
        });
        

        
    }
    render() {
        let myTableData = this.state.users.map((element,elIndex) =>{
            return <tr key = {elIndex}>
                    <td>{element.username}</td>
                    <td>{element.email}</td>
                    <td><Link to = "/alertForm"><button className = "btn btn-success">Go To Alert Form</button></Link></td>
                    
                    <td>
                        <button className = "btn btn-danger" onClick = {() => {this.deleteUsers(element.id)}}>
                            DELETE
                        </button>
                    </td>
                    </tr>
        });
        let myTable = <Table striped bordered hover variant="dark" style = {{maxWidth : "65%"}}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Go To Alert Form</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody> 
            {myTableData}
        </tbody>
        </Table>

        return (
            <div>
                {myTable}
            </div>
        )
    }
}
export default GetUsersAndTable ;