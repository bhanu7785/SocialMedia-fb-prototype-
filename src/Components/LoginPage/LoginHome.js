import React, { Component } from 'react';
import './LoginHome.css';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

import fb from '../../images/logo.png';
import {firebase} from '../../firebase.js';

class LoginHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            signIN:true,

            //signin
            signin_email:null,
            signin_password:null,

            //signup
            signup_name:null,
            signup_email:null,
            signup_password:null
         }
    }
switchPanel=()=>{
    if(this.state.signIN)
    this.setState({signIN:false});
    else
    this.setState({signIN:true});
}
  
signUP=()=>{

  firebase.auth().createUserWithEmailAndPassword(this.state.signup_email, this.state.signup_password)
  .then((userCredential) => {
    // Signed up 
    var user = userCredential.user;
    // ...
    let payload={
        "userId":user.uid,
        "userName":this.state.signup_name,
        "userImageURL":""

    }

    const requestOptions={
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(payload),

    }
    fetch('http://localhost:8080/api/user/save',requestOptions)
    .then(response=>response.json())
    .then(data=>{
        var user = userCredential.user;
        localStorage.setItem("user",JSON.stringify(data));
        window.location.reload();

    })
    .catch(error =>{
        console.log(error);
    })

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });


}


signInMethod=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.signin_email, this.state.signin_password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
     fetch('http://localhost:8080/api/user/user'+user.uid)
    .then(response=>response.json())
    .then(data=>{
        var user = userCredential.user;
        localStorage.setItem("user",JSON.stringify(data));
        window.location.reload();

    })
    .catch(error =>{

    })

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}
    render() { 
        return (  
            <div className="main_container">
                <Grid className="main_content" container>
                    <Grid item xs={7}>
                        <div className="fblogo">
                            <img src={fb} width="300px"></img>
                        </div>
                        <div>
                            <h1 className="text">facebppk helps you connect with the people in your life.</h1>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className="logincard_container">

                            {
                                this.state.signIN === true ?
                                <div conatiner="logo_panel">
                                    <div>
                                        <input onChange={(event)=>{this.setState.signin_email=event.currentTarget.value}} type="text" className="login_input" placeholder="Email address"></input>
                                    </div>
                                    <div>
                                        <input onChange={(event)=>{this.setState.signin_password=event.currentTarget.value}}type="password" className="login_input" placeholder="Password"></input>
                                    </div>
                                    <div>
                                        <button  onClick={this.signInMethod} className="login_button">Log in</button>
                                    </div>
                                    <div>
                                        <div className="forget_text">Forgotten passsword?</div>
                                    </div>
                                    <div>
                                        <div className="dividor"></div>
                                    </div>

                                    <div>
                                        <button className="login_createnew" onClick={this.switchPanel}>Create New Account</button>
                                    </div>
                                </div>
                                :
                                <div className="login_panel">
                                    <div>
                                        <input onChange={(event)=>{this.state.signup_name=event.currentTarget.value}} type="text" className="login_input" placeholder="Name"></input>
                                    </div>
                                    <div>
                                         <input onChange={(event)=>{this.state.signup_email=event.currentTarget.value}} type="text" className="login_input" placeholder="Email Address"></input>
                                    </div>
                                    <div>
                                         <input onChange={(event)=>{this.state.signup_password=event.currentTarget.value}} type="password" className="login_input" placeholder="Password"></input>
                                    </div>
                                    <div>
                                        <button onClick={this.signUP} className="login_button">SignUp</button>
                                    </div>
                                    <div>
                                        <div onClick={this.switchPanel} className="forget_Text">Already have account?</div>
                                    </div>
                                </div>
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={1}></Grid>

                </Grid>

            </div>
        );
    }
}
 
export default LoginHome;