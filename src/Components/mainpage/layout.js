import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import './mainpage.css';
import LeftSidePanel from './leftside_panel/leftside';
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/postcontainer';
import RightsidePanel from './rightside_panel/rightside';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    letsupdate=()=>{
        this.refs.child.getData();

    }
    render() { 
        return (
            <div className="mainpage_container">
                <Grid container>
                    <Grid item xs={3} >
                        <LeftSidePanel />
                    </Grid>
                    <Grid item xs={7} className="middleContiner" >
                        <StatusBar />
                        <UploadSection update={this.letsupdate}/>
                        <PostContainer ref="child" />
                    </Grid>
                    <Grid item xs={2} >
                        <RightsidePanel />
                    </Grid>

                </Grid>
            </div>
          );
    }
}
 
export default Layout;