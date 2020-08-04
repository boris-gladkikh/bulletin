import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import NewAndEditPostForm from "./NewAndEditPostForm";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { useDispatch, useSelector } from "react-redux";
import { removePost, editPost, addComment, deleteComment } from "./actionCreators";
import { getPostDetailFromAPI } from "./actionCreators";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';



//renders parent 'Post' which has the comment children components as well as the edit form component
//App -> Post -> [PostDetail, Comment, NewAndEditPostForm]   <--- great heirarchy doc string!

function Post() {
  const [editForm, setEditForm] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const { postId } = useParams();
  let post = useSelector(st => st.posts[postId]);
  const comments = useSelector(st => st.comments[postId]) || [];


  //thunk API call to backend to retrieve post detail
  useEffect(function fetchPostDetail() {
    if (post === undefined && postId !== undefined) {
      dispatch(getPostDetailFromAPI(postId))
    }
  }, [dispatch, postId, post])



  //function to toggle visibility of edit form on button click
  function showEditForm() {
    setEditForm(!editForm);
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
      <div className="mt-5">
        <Accordion>
          <Card className="w-75 m-auto p-1 text-dark">
            <Card.Header className="text-alert">
              <h2 style={{ color: "black" }}>{post.title}</h2>
            </Card.Header>
            <Card.Body>
              <h3  >{post.description}</h3>
              <hr></hr>
              <p >{post.body}</p>
            </Card.Body>
            <Card.Footer className="d-flex flex-row justify-content-between">
              <div>
                <Button size="sm" className="mr-2" onClick={showEditForm}>Edit Post</Button>
                <Button size="sm" onClick={() => deletePostFromStore(postId)}>Delete Post</Button>
              </div>
              <div>
                {comments.length} Comments
              <Button size="sm" className="ml-2">Add Comment</Button>
              </div>
            </Card.Footer>
            {displayComments}
            <CommentForm postId={postId} addComment={addCommentToStore} deleteComment={deleteCommentFromStore} />
          </Card>

        </Accordion>


        {editForm === true ? <NewAndEditPostForm
          editPost={editPostInStore}
          editId={postId}
          post={post}

        /> : ""}

      </div>
    )
  }
}

export default Post

