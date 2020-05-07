import React from "react";

//renders individual comment card, with  delete comment functionality

function Comment({ postId, commentId, text, deleteComment }) {


  function handleDelete(){
    deleteComment(postId, commentId)
  }


  return(
    <li id={commentId}>{text}
      <button onClick={handleDelete}>X</button>
    </li>
  );
}

export default Comment;