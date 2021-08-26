import React ,{ Component } from 'react';
import "./navbar.css";
import logo from '../../images/logo.png';

import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core'
import homebutton from '../../images/home.svg';
import pages from '../../images/pages.svg';
import watch from '../../images/watch.svg';
import market from '../../images/market.svg';
import group from '../../images/groups.svg';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
             <Grid container className="navbar_main">
                 <Grid item xs={3}>
                     <div className="navbar_leftbar">
                         <img className="navbar_logo" src={logo} width="40px"/>
                         <input className="navbar_search" type="text" placeholder="Search"/>
                     </div>
                 </Grid>
                 <Grid item xs={6}>
                     <div className="navbar_container">
                         <div className="navbar_tabs active">
                       <img src={homebutton} height="35px" width="35px" />
                       </div>
                       <div className="navbar_tabs">
                       <img src={pages} height="35px" width="35px" />
                       </div>
                       <div className="navbar_tabs">
                       <img src={watch} height="35px" width="35px" />
                       </div>
                       <div className="navbar_tabs">
                       <img src={market} height="35px" width="35px" />
                       </div>
                       <div className="navbar_tabs">
                       <img src={group} height="35px" width="35px" />
                       </div>
                     </div>
                 </Grid>
                 <Grid item xs={3}>
                     <div className="navbar_right">
                       <div className="navbar_righttab">
                         <Avatar className="navbar_rightimg" src=""/>
                        <div className="navbar_profilename">Bhanu</div>
                        </div>
                     </div>
                 </Grid>
             </Grid>
            </div>
        );
    }
}
 
export default NavBar;