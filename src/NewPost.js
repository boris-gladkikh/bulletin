import React from "react";
import NewAndEditPostForm from "./NewAndEditPostForm";
import {useDispatch} from "react-redux";
import { addPost } from "./actionCreators";



function NewPost(){

const dispatch = useDispatch()
  
//get the add_post and remove_post functions into here in order to pass them to

function addPostToStore(postId,data){
  dispatch(addPost(postId,data))
}

// function editPostInStore(postId,data){
//   dispatch(editPost(postId,data))
// }



  return (
    <div>
      <h1>Add A New Post!</h1>
      <NewAndEditPostForm addPost={addPostToStore} />
    </div>
  )

}

export default NewPost