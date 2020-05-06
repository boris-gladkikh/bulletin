import React from "react";

function Comment({ id, text }) {
  return(
    <li id={id}>{text}
      <button>X</button>
    </li>
  );
}

export default Comment;