import React from "react";
import {useParams} from "react-router-dom";

function PostDetail({posts}){

  let {id} = useParams();
  let postArray = posts.filter(p=> p.id === id);
  let post = postArray[0];
  console.log("this is our post in postdetail", post)
  console.log("this is our id in post Detail", id)

  function editPost(id){
    // redirect to form, include id to find proper post
  }

  function deletePost(id){
    //include id to find proper post
    //remove post from 'posts' state
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.body}</p>
      <button onClick={editPost}>Edit Post</button>
      <button onClick={deletePost}>Delete Post</button>

    </div>
  )
}

export default PostDetail