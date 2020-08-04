import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//renders comment form child in post details, allowing addition of comment on specific post

function CommentForm({ addComment, postId }) {
  const BLANK_FORM = { text: "" }
  const [commentFormData, setCommentFormData] = useState({ ...BLANK_FORM });


// adds id to commentForm data and  adds comment to store

  function handleSubmit(evt) {
    evt.preventDefault();
    let completeComment = { ...commentFormData, commentId: uuidv4() }
    // add comment to store
    addComment(postId, completeComment)

    //reset form data to blank form
    setCommentFormData(BLANK_FORM);

  }

  function handleChange(evt) {
    setCommentFormData({ text: evt.target.value });
  }

  return (

    <div>
      <h6>Add A Comment!</h6>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <input
          placeholder="comment"
          name="comment"
          type="text"
          onChange={handleChange}
          value={commentFormData.text} />
        <button>Add</button>
      </form>
    </div>

  )
}

export default CommentForm