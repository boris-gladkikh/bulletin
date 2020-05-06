import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CommentForm({addComment, postId}) {
  const BLANK_FORM = { text: "" }
  const [commentFormData, setCommentFormData] = useState({ ...BLANK_FORM });



  function handleSubmit(evt) {
    evt.preventDefault();
    let completeComment = { ...commentFormData, id: uuidv4() }
    // add comment to posts state 
    addComment(postId,completeComment)

    //reset form data to blank form
    setCommentFormData(BLANK_FORM);


  }

  function handleChange(evt) {
    let { name, value } = evt.target;
    setCommentFormData((data) => ({
      ...data,
      [name]: value
    }))

  }
  return (
    <div>
      <h2>Add A Comment!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <input
          placeholder="comment"
          name="comment"
          type="text"
          onChange={handleChange}
          value={commentFormData.text} />
        <button>Add Comment</button>
      </form>
    </div>

  )
}

export default CommentForm 