import { Avatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import './UploadSection.css';
import live from '../../../images/video.png';
import image from '../../../images/image.png';
import feeling from '../../../images/feelings.png';
import { Dialog } from '@material-ui/core';
import {firebase } from '../../../firebase';


class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open:false,
            uploadImage:null,
            description:null
         }
    }

    handleClose=() =>{
        this.setState({open:false})

    }
    openDialog=(event) =>{
        this.setState({open:true});
        this.setState({uploadImage: URL.createObjectURL(event.target.files[0])});
        this.setState({image:event.target.files[0]});

    }
    uploadTofireBase=()=>{
        const thiscontext=this;
      var uploadTask = firebase.storage().ref('images').child(this.state.image.name).put(this.state.image);
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
            "postImageURL": downloadURL,
            "description":thiscontext.state.description
    
        }
    
        const requestOptions={
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(payload),
    
        }
        fetch('http://localhost:8080/api/post/save',requestOptions)
        .then(response=>response.json())
        .then(data=>{
            thiscontext.setState({open:false});
            thiscontext.props.update();
    
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

                <Dialog aria-labelledby="simple-dialog-title" className="upload_dialogbox" open={this.state.open}>
                    <div className="upload_header">Create Post</div>
                    <input type="text" onChange={(event)=>this.state.description=event.currentTarget.value} className="upload_textbox" placeholder="Whats's on your mind?" />
                    <img src={this.state.uploadImage} className="upload_preview" />
                    <input type="button" value="Post" onClick={this.uploadTofireBase} className="upload_button" />
                </Dialog>
                <Paper className="upload_container">
                <div className="upload_top">
                    <div className="upload_img">
                        <Avatar />
                    </div>
                    <div>
                        <input  className="upload_box" type="text"  placeholder="What's on your mind ?"/>
                    </div>
                </div>
                <div className="upload_bottom">
                    <div className="upload_tabs">
                      <img src={live} width="35px" />
                      <div className="upload_text">Live Video</div>
                    </div>
                    <div className="upload_tabs">
                        <label for="file-upload" className="upload_tabs">
                    <img src={image} width="35px"/>
                    <div className="upload_text">Photos/Images</div>
                        </label>
                        <input type="file" id="file-upload" onChange={this.openDialog} />
                    </div>
                    <div className="upload_tabs">
                    <img src={feeling} width="35px" />
                    <div className="upload_text">Feelings/Activity</div>
                    </div>

                </div>
                </Paper>

            </div>
         );
    }
}
 
export default UploadSection;