import React, { Component } from 'react'
import Form from 'react-bootstrap/Form' ;
import {Row, Col} from 'reactstrap';
import axios from 'axios' ;
import './AlertForm.css' ;
import {Link} from 'react-router-dom' ;
import swal from 'sweetalert' ;
class AlertForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            url: 'https://',
            httpMethod: 'GET',
            controlPeriod: ''
        }
    }
    changeHandler = (e) => {
        console.log(e) 
        this.setState({[e.target.name] : e.target.value}) ;
    }
   
    submitHandler = (e) => {
        e.preventDefault() ;
        console.log("submit handlera girdi")
        axios.post('http://localhost:8080/addAlert',this.state)
        .then((response) => {

            console.log(response.data) ;
            this.setState({
                name: '',
                url: 'https://',
                httpMethod: 'GET',
                controlPeriod: ''
        })
        swal({
            title: "Good job!",
            text: "Alert has been added!",
            icon: "success",
          });
    }    
        )
        .catch(error => {
            console.log(error)
            swal("Oppps!!", "Be sure you complete all the field!", "error");
        })
        
    }
    
    render() {
        const {name, url, httpMethod, controlPeriod} = this.state
        return (
            <div >
                <Form onSubmit = {this.submitHandler}
                style = {{maxWidth : "65%"}}>
                <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                    <Form.Label column sm={2}>Name :</Form.Label>
                    <Col sm={7}>

                        <Form.Control type="text"
                                      value={name}
                                      name="name"
                                      required
                                      onChange={this.changeHandler}
                                      placeholder={"Enter the name:"}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="exampleForm.ControlInput2">
                    <Form.Label column sm={2}>Url :</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="text"
                                      value={url}
                                      required
                                      name="url"
                                      onChange={this.changeHandler}
                                      placeholder={"Enter the url:"}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                    <Form.Label column sm={2}>HTTP Method :</Form.Label>
                    <Col sm={7}>
                        <Form.Control as="select"
                                      value={httpMethod}
                                      name="httpMethod"

                                      onChange={this.changeHandler}
                        >
                            <option>GET</option>
                            <option>POST</option>
                            <option>DELETE</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="exampleForm.ControlInput3">
                    <Form.Label column sm={2}>Control Periyod :</Form.Label>
                    <Col sm={7}>
                        <Form.Control type="number"
                        min="0"
                        required
                                      value={controlPeriod}
                                      name="controlPeriod"
                                      placeholder={"Enter the control period:"}
                                      onChange={this.changeHandler}
                        />
                    </Col>
                </Form.Group>
                <button
                type = "submit"
                className="btn btn-success"
                style = {{marginLeft:"65%" }}
               > SUBMIT </button>

            </Form>
            <Link to = "/alertTable">
                <button 
                    type ="submit"
                    className = "btn btn-danger">
                        ALERT LIST
                </button>
            </Link>
            </div>
        )
    }
}
export default AlertForm ;