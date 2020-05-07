import React from "react";

//renders individual comment card, with  delete comment functionality

function Comment({ postId, commentId, text, deleteComment }) {

  return(
    <li id={commentId}>{text}
      <button onClick={()=>deleteComment(postId, commentId)}>X</button>
    </li>
  );
}

export default Comment;