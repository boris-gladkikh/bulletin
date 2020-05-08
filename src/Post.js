import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import NewAndEditPostForm from "./NewAndEditPostForm";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import PostDetail from "./PostDetail";
import { useDispatch, useSelector } from "react-redux";
import { removePost, editPost, addComment, deleteComment } from "./actionCreators";
import { getPostDetailFromAPI } from "./actionCreators";


//renders parent 'Post' which has the comment children components as well as the edit form component
//App -> Post -> [PostDetail, Comment, NewAndEditPostForm]   <--- great heirarchy doc string!

function Post() {
  const [editForm, setEditForm] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { postId } = useParams();
  let post = useSelector(st => st.posts[postId]);
  const comments = useSelector(st => st.comments[postId]) || [];

  console.log("post var in post component", post)

  //thunk API call to backend to retrieve post detail
  useEffect(function fetchPostDetail() {
    if (post === undefined && postId !== undefined) {
      dispatch(getPostDetailFromAPI(postId))
    }
  }, [dispatch, postId, post])



  //function to toggle visibility of edit form on button click
  function showEditForm() {
    setEditForm(true);
  }


  //function to edit post in our redux state using dispatch
  function editPostInStore(postId, data) {
    dispatch(editPost(postId, data))
  }

  //function to delete post from our redux state using dispatch

  function deletePostFromStore(postId) {
    dispatch(removePost(postId));
    history.push("/");

  }

  //function to add comment to our redux state

  function addCommentToStore(postId, data) {
    dispatch(addComment(postId, data))
  }

  //function to delete comment from our redux state

  function deleteCommentFromStore(postId, commentId) {
    dispatch(deleteComment(postId, commentId))
  }


  //ternary operator - if there are comments in state.comments, render comment components with necessary info.
  //otherwise render a 'no comments yet' paragraph
  let displayComments = (comments.length !== 0)
    ? comments.map(c => (
      <ul>
        <Comment
          deleteComment={deleteCommentFromStore}
          key={c.commentId}
          commentId={c.commentId}
          postId={postId}
          text={c.text} />
      </ul>))
    : <p>No Comments Yet</p>

  if (post === undefined) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )

  } else {

    return (
      <div>
        <PostDetail post={post} />
        <button onClick={showEditForm}>Edit Post</button>
        <button onClick={() => deletePostFromStore(postId)}>Delete Post</button>
        {editForm === true ? <NewAndEditPostForm
          editPost={editPostInStore}
          editId={postId}
          post={post}

        /> : ""}

        <h4>Comments</h4>
        {displayComments}
        <CommentForm postId={postId} addComment={addCommentToStore} deleteComment={deleteCommentFromStore} />
      </div>
    )
  }
}

export default Post

