import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import './Status.css';
import uploadIcon from "../../../images/upload.png";
import {firebase} from "../../../firebase";

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    openDialog=(event) =>{
      let image=event.target.files[0];
      if(image==undefined || image==null)
       return;
       const thiscontext=this;
      var uploadTask = firebase.storage().ref('status').child(image.name).put(image);
      uploadTask.on('state_changed', 
      function(snapshot)  {
      
       }, 
    function(error){
       }, 
    function(){
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){

        let payload={
            "userId":JSON.parse(localStorage.getItem("user")).userId,
            "userName":JSON.parse(localStorage.getItem("user")).userName,
            "statusImgURL": downloadURL,
    
        }
    
        const requestOptions={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(payload),
    
        }
        fetch('http://localhost:8080/api/status/save',requestOptions)
        .then(response=>response.json())
        .then(data=>{
    
        })
        .catch(error =>{
            console.log(error);
        })

         })
     }
     );
    }
   
    render() {  
        return ( 
            <div>
                {
                    this.props.uploader =="true" ?
                    <Paper className="statusbar_status">

                        <label for="file-upload" className="upload_tabs">
                             <img src={uploadIcon} className="upload_icon"/>
                        </label>
                        <input type="file" id="file-upload" onChange={this.openDialog}/>
                      
                    </Paper>:
                    <Paper className="statusbar_status">
                    <img src={this.props.object.statusImgURL} className="status_img" />
                    </Paper>
                }
            </div>
         );
    }
}
 
export default Status;