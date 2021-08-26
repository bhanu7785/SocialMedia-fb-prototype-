import React, { Component } from 'react';
import'./rightside.css';
import covid from '../../../images/covid.png';
import group from '../../../images/groups.png';
import ImageLayout from '../ImageLayout';

class RightsidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }

    }
    getData=()=>{
        // let jsondata=[
        //     {
        //         "image": covid,
        //         "text" : "Ram"
        //     },
        //     {
        //         "image":group,
        //           "text":"Kamlesh"
        //     }
        // ];
        const thiscontext=this;
        fetch('http://localhost:8080/api/user/viewAllDetails')
        .then(response=>response.json())
        .then(json=>{
            thiscontext.setState({data:json});
    
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
            < div className="rightside_conatiner">

                <div className="rightside_header">
                    Contacts
                </div>
                <div className="rightside_content">

                {
                    this.state.data.map((item) => <ImageLayout image={item.image} text= {item.userName}/>
                    )
                }

                </div>
            </div>
         );
    }
}
 
export default RightsidePanel;