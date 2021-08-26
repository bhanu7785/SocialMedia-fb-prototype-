import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';

import './mainpage.css';

class ImageLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="leftpanle_imagelayout">
            <div className="imagelayout_img">
                <Avatar src={this.props.image}></Avatar>
            </div>
            <div className="imagelayout_text">
                {this.props.text}
            </div>
            </div>
        );
    }
}
 
export default ImageLayout;