import React, { Component } from 'react';
import Status from './Status';
import './Status.css';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }
    getData=()=>{
        const thiscontext=this;
        fetch('http://localhost:8080/api/status/viewAll')
        .then(response=>response.json())
        .then(json=>{
            thiscontext.setState({data:json})
    
        })
        .catch(error =>{
            console.log(error);
        })
    }
    componentDidMount(){
        this.getData();
    }
    render() { 
        return ( 
            <div className="statusbar_container">
                <Status  uploader="true"/>
                
                { 
                 this.state.data.map((item) => <Status object={item} />
                 )}
            </div>
         );
    }
}
 
export default StatusBar;