import React from "react";
import NewAndEditPostForm from "./NewAndEditPostForm";
import { useDispatch } from "react-redux";
import { addPost } from "./actionCreators";



function NewPost() {

  const dispatch = useDispatch()

  function addPostToStore(postId, data) {
    dispatch(addPost(postId, data))
  }


  return (
    <div>
      <h1>Add A New Post!</h1>
      <NewAndEditPostForm addPost={addPostToStore} />
    </div>
  )

}

export default NewPost