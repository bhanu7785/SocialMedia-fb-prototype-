import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import './leftside.css';
import covid from '../../../images/covid.png';
import group from '../../../images/groups.png';
import memories from '../../../images/memories.png';
import blood from '../../../images/blood.png';
import messagerKids from '../../../images/messengerkids.png';
import adcenter from '../../../images/admanager.png';
import ads from '../../../images/ads.png';
import businessManager from '../../../images/business.png';





class LeftSidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         }
    }

    getData=()=>{
        let jsondata=[
        {
            "image": covid,
            "text" : "COVID-19 InCenterformation "
        },
        {
            "image":group,
            "text":"Friends"

        },
        {
            "image":memories,
            "text":"Memories"

        },
        {
            "image":blood,
            "text":"Blood Donation"

        },

        {
            "image":messagerKids,
            "text":"Messenger Kids"

        },
        {
            "image":adcenter,
            "text":"Ad Center"

        },
        {
            "image":ads,
            "text":"Ads Manager"

        },
        {
            "image":businessManager,
            "text":"Business Manager"

        }
        ];
        this.setState({data : jsondata});
}
   componentDidMount(){
       this.getData();
   }

    render() { 
        return (  
            <div>
                {
                    this.state.data.map((item) => <ImageLayout image={item.image} text= {item.text}/>
                    )
                }
            </div>
        );
    }
}
 
export default LeftSidePanel;