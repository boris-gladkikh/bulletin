import React from "react";

function Comment({ postId, commentId, text, deleteComment }) {

  return(
    <li id={commentId}>{text}
      <button onClick={()=>deleteComment(postId, commentId)}>X</button>
    </li>
  );
}

export default Comment;