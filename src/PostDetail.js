import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import NewAndEditPostForm from "./NewAndEditPostForm";

function PostDetail({ posts, deletePostFromState, editPostInState }) {
  const [editForm, setEditForm] = useState(false)
  const history = useHistory()

  let { id } = useParams();
  let postArray = posts.filter(p => p.id === id);
  let post = postArray[0];


  function editPost() {
    setEditForm(true);
  }

  function deletePost() {
  deletePostFromState(id);
  history.push("/");

  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.body}</p>
      <button onClick={editPost}>Edit Post</button>
      <button onClick={deletePost}>Delete Post</button>
      {editForm === true ? <NewAndEditPostForm
      editPostInState={editPostInState}
        editId={post.id}
        editTitle={post.title}
        editDescription={post.description}
        editBody={post.body} 
        /> : ""}

    </div>
  )
}

export default PostDetail