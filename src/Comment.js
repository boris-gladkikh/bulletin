import React from "react";

//renders individual comment card, with  delete comment functionality

function Comment({ postId, commentId, text, deleteComment, datePosted }) {


  function handleDelete(){
    deleteComment(postId, commentId)
  }

  console.log(datePosted)


  return(
    <li id={commentId}>{text} {datePosted}
      <button onClick={handleDelete}>X</button>
    </li>
  );
}

export default Comment;