import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import NewAndEditPostForm from "./NewAndEditPostForm";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

/**
 * comments state {postId: [{commentId: commentId, text: text}]}
 */

function PostDetail({ posts, deletePostFromState, editPostInState }) {
  const [editForm, setEditForm] = useState(false)
  const [comments, setComments] = useState({})
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


  function addComment(postId, commentData) {
    if (comments[postId] !== undefined) {

      setComments(oldComments => (
        {
          ...oldComments,
          [postId]: [...oldComments[postId], { ...commentData }]
        }
      ))
    } else {

      setComments(oldComments => (
        {
          ...oldComments,
          [postId]: [{...commentData}]
        }
      ))
    }
  }


  function deleteComment(postId, commentId) {
    let filterComments = comments[postId].filter(c => c.commentId !== commentId);
    setComments(oldComments => (
      {
        ...oldComments,
        [postId]: [...filterComments]
      }
    ))
  }

  let displayComments = (comments[id] !== undefined)
    ? comments[id].map(c => (
      <ul>
        <Comment
          deleteComment={deleteComment}
          key={c.commentId}
          commentId={c.commentId}
          postId={id}
          text={c.text} />
      </ul>))
    : <p>No Comments Yet</p>

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

      <h2>Comments</h2>
      {displayComments}
      <CommentForm postId={id} addComment={addComment} deleteComment={deleteComment} />
    </div>
  )
}

export default PostDetail