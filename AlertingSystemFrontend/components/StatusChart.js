import React, { Component } from 'react'
import Chart from 'react-google-charts' ;
import axios from 'axios';
import {Link} from 'react-router-dom' ;
class StatusChart extends Component {
    constructor(props){
        super(props) ;
        this.state = {
            alert : null 
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            console.log("prop changed " + this.props.match.params.selectionId)
            this.getChartData();
        }
    }
    componentDidMount() {
        setInterval(() =>{
            console.log("Result component mounted...") ;
            this.getChartData();
        },1000);
        
    }
    getChartData(){
        if(this.props.match.params.selectionId !== null){
            axios.get('http://localhost:8080/getAlerts/' + this.props.match.params.selectionId)
            .then(response =>{
                this.setState({alert : response.data });
            })
        }
    }
    render() {
        if (this.state.alert !== null){
            return(
                <div>
                    <Chart
                        width={1000}
                        height={650}
                        chartType="ScatterChart"
                        loader={<div>Loading Chart</div>}
                        data={[[
                            {type: 'datetime', label: 'x'},
                            {type: 'number', label: 'values'},
                        ]].concat(this.state.alert.alertResult.map((element, index) => {
                            return [new Date(element.requestDate), element.requestResult]
                        }))}
                        options={{
                            backgroundColor : "white",
                            title : "REQUEST RESULT" ,
                            intervals: {style: 'sticks'},
                            legend: 'none',
                        }}
                    />
                    <Link to = "/alertTable">
                        <button 
                            type ="submit"
                            className = "btn btn-danger">
                                ALERT LIST
                        </button>
            </Link>
                </div>
            )
        }else {
            return (
                <span>Use the GET CHART button to see related chart... </span>
            )
        }
    }
}
export default StatusChart ;
