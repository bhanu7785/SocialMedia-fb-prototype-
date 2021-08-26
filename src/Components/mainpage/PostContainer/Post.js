import { Avatar, Paper } from '@material-ui/core';
import React, { Component } from 'react';
import post from '../../../images/post.jpeg';
import like from '../../../images/like.png';
import likebutton from '../../../images/likebutton.png';
import comment from '../../../images/comment.png';
import share from '../../../images/share.png';


import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     isImageAvailable=(data) => { 
        return data==""?false:true; 
    };

    render() { 
        return (
            <div>
                <Paper className="post_container">
                    {/*header */}
                    <div className="post_header">
                        <div className="post_header_img">
                            <Avatar className="post_img" src={this.props.object.userImageURL}/>
                        </div>
                        <div className="post_header_text">
                           {this.props.object.userName}
                        </div>
                    </div>
                    {/*description*/}
                    <div className="post_desc">
                    {this.props.object.description}
                    </div>
                    {/*image*/}
                    <div className="post_img">
                        {
                            this.isImageAvailable(this.props.object.postImageURL) ? <img src={this.props.object.postImageURL} width="600px" /> : <span></span>
                        }
                        
                    </div>
                    {/*like count*/}
                    <div className="post_likecount">
                        <div className="post_like">
                        <img className="post_likeimg" src={like} />
                        </div>
                        <div className="post_likeno">
                        {this.props.object.likes}
                        </div>
                    </div>
                    {/*like share box*/}
                    <div className="post_likeShare">
                    <div className="post_tab">
                        <div className="post_tabfirst">
                            <img className="post_tabimg" src={likebutton} />
                            </div>
                            <div className="post_tabtext">
                                Like
                            </div>
                        </div>
                        <div className="post_tab">
                        <div className="post_tabfirst">
                           
                            <img className="post_tabimg" src={comment} />
                            </div>
                            <div className="postcommenttext">
                                Comment
                            </div>
                        </div>
                        <div className="post_tab">
                        <div className="post_tabfirst">
                            <img className="post_tabimg" src={share} />
                            </div>
                            <div className="post_tabtext">
                                Share
                            </div>
                        </div>
                    </div>
                    {/*comment box*/}
                    <div>
                    <div className="upload_top">
                    <div className="upload_img">
                        <Avatar />
                    </div>
                    <div>
                        <input  className="upload_box" type="text"  placeholder="Comments here"/>
                    </div>
                   </div>
                        
                    </div>


                </Paper>
            </div>
          );
    }
}
 
export default Post;