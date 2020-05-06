import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

/**
 * TODO: FINISH ONSUBMIT FUNCTION
 *
 * Renders a form for user to add new post or edit existing post.
 * Submiting or canceling redirects user home.
 */

function NewAndEditPostForm({ addPostToState }) {
  const INITIAL_DATA = { title: "", description: "", body: "" };
  const [postFormData, setPostFormData] = useState(INITIAL_DATA);
  const history = useHistory();




  function onSubmit(evt) {
    let completeData = {
      ...postFormData,
      id: uuidv4()
    }
    evt.preventDefault();
    addPostToState(completeData);
    setPostFormData(INITIAL_DATA);
    redirectUpdateHistory();
  }

  function onChange(evt) {
    const { name, value } = evt.target;
    setPostFormData(currentData => (
      {
        ...currentData,
        [name]: value
      }
    ));
  }

  function redirectUpdateHistory() {
    history.push("/");
  }

  let { title, description, body } = postFormData;

  //two routes, one to "new", one to "edit"
  //both routes get same form component, pass either new or edit into a prop

  return (
    <div>
      <h2>Add New Post!</h2>
      <h2>Edit Post!</h2>
    <form onSubmit={onSubmit}>
      <label htmlFor="title"></label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        placeholder="title"
        onChange={onChange}>
      </input><br />
      <label htmlFor="description"></label>
      <input
        id="description"
        name="description"
        type="text"
        value={description}
        placeholder="description"
        onChange={onChange}>
      </input><br />
      <label htmlFor="body"></label>
      <textarea
        id="body"
        name="body"
        value={body}
        placeholder="body"
        onChange={onChange}>
      </textarea><br />
      <button id="save">Save</button>
      <button
        type="button"
        onClick={redirectUpdateHistory}
        id="cancel">
        Cancel</button>
    </form>
    </div>
  );
}

export default NewAndEditPostForm;