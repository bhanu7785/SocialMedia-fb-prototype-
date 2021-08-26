import React, { Component } from 'react';
import Post from './Post';
import './Post.css';
import post from '../../../images/post.jpeg';

class PostContainer
 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
          }
    }
    getData=()=>{ //calling rest api from backend
        // let jsondata=[
        //     {
        //       "postId":1,
        //       "user_id":1287,
        //       "user_img":"",
        //       "user_name":"Bhanu",
        //       "description":"Loved this wallpaper",
        //       "post_img":"post",
        //       "like":125
        //     },
        //     {
        //         "postId":2,
        //         "user_id":1287,
        //         "user_img":"url.....",
        //         "user_name":"Shukla",
        //         "description":"Loved this wallpaper",
        //         "post_img":"",
        //         "like":435
        //       }
        // ];
        const thiscontext=this;
        fetch('http://localhost:8080/api/post/viewAll')
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
            <div>
              {
                this.state.data.map((item)=> <Post object={item}/>)  
              }
            </div>
         );
    }
}
 
export default PostContainer
;