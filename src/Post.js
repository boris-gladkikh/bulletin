import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import NewAndEditPostForm from "./NewAndEditPostForm";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import PostDetail from "./PostDetail";
import {useDispatch, useSelector} from "react-redux";
import { removePost, editPost } from "./actionCreators";




//TODO use selector to get post data to pass to post details
//TODO add comment, delete comment redux functions


// ================================================
// post:
// {postId: {title: "", description:"", body""}}


// comments:
//  {postId: [{commentId: commentId, text: text}]}
// ================================================



//renders parent 'Post' which has the comment children components as well as the edit form component

function Post(){
  const [editForm, setEditForm] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch();

  let { postId } = useParams();
  const post = useSelector(st=>st.posts[postId])




  //function to toggle visibility of edit form on button click
  function showEditForm(){
    setEditForm(true);
  }


  //function to edit post in our redux state using dispatch
  function editPostInStore(postId,data){
    dispatch(editPost(postId,data))
  }

  //function to delete post from our redux state using dispatch

  function deletePostFromStore(postId){
    dispatch(removePost(postId));
    history.push("/");

  }


  // let displayComments = (comments[id] !== undefined)
  //   ? comments[id].map(c => (
  //     <ul>
  //       <Comment
  //         deleteComment={deleteComment}
  //         key={c.commentId}
  //         commentId={c.commentId}
  //         postId={id}
  //         text={c.text} />
  //     </ul>))
  //   : <p>No Comments Yet</p>

  return (
    <div>
      <PostDetail post={post} />
      <button onClick={showEditForm}>Edit Post</button>
      <button onClick={()=>deletePostFromStore(postId)}>Delete Post</button>
      {editForm === true ? <NewAndEditPostForm
        editPost={editPostInStore}
        editId={postId}
        post={post}
       
      /> : ""}

      <h2>Comments</h2>
      Comments under construction
      {/* {displayComments}
      <CommentForm postId={id} addComment={addComment} deleteComment={deleteComment} /> */}
    </div>
  )
}

export default Post

