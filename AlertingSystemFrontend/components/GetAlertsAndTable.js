import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom' ;
import Table from 'react-bootstrap/Table'
import swal from 'sweetalert' ;

class GetAlertsAndTable extends Component {
    state = {
        alerts : []
    } ;
    componentDidMount(){
        console.log("Get Alert component mounted") ;
        this.retrieveData() ;
    }
    retrieveData(){
        axios.get('http://localhost:8080/getAlerts')
        .then((response => {
            console.log(response.data) ;
            this.setState({alerts : response.data});

        })) ;
    }
    deleteAlert(id){
        console.log("It entered the delete method."+ id) ;
        swal ({
            title : "Are you sure ?",
            text : "If you delete, you can't reach this alert again!",
            icon :"warning" ,
            buttons : true ,
            dangerMode : true
        })
        .then((willDelete)=>{
            if(willDelete){
                axios.delete('http://localhost:8080/deleteAlert/'+id)
                .then((response)=>{
                    this.retrieveData();
                    swal({
                        title : "Good Job!",
                        text : "Alert is deleted!",
                        icon :"success" ,
                    })
        
                })
            }
            else {
                swal ("Alert is not deleted!") ;
            }
        });
    }

    render() {
        let myTableData = this.state.alerts.map((element,elIndex) =>{
            return <tr key = {elIndex}>
                <td>{element.name}</td>
                <td>{element.url}</td>
                <td>{element.httpMethod}</td>
                <td>{element.controlPeriod}</td>
                <td>
                    <Link to={"/getAlerts/" + element.id}>

                        <button className = "btn btn-success">
                            GET CHART
                        </button>
                    </Link>
                </td>
                <td>
                    <button className = "btn btn-danger" onClick = {() => {this.deleteAlert(element.id)}} >
                        X
                    </button>
                </td>
            </tr>
        }) ;
        let myTable = <Table striped bordered hover variant="dark" style = {{maxWidth : "65%"}}>
            <thead>
                <tr>
                    <th style = {{color : "red"}}>Name</th>
                    <th style = {{color : "red"}}>Url</th>
                    <th style = {{color : "red"}}>HttpMethod</th>
                    <th style = {{color : "red"}}>ControlPeriod</th>
                    <th style = {{color : "red"}}>Chart</th>
                    <th style = {{color : "red"}}>Delete Button</th>
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
export default GetAlertsAndTable ;
