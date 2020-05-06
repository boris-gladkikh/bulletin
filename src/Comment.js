import React from "react";

function Comment({ id, text, deleteComment }) {

  // function handleClick(){
  //   deleteComment(id)
  // }
  return(
    <li id={id}>{text}
      <button onClick={()=>deleteComment(id)}>X</button>
    </li>
  );
}

export default Comment;