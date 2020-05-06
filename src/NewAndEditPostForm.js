import React, { useState } from 'react';
import { useHistory} from "react-router-dom";

/**
 * TODO: FINISH ONSUBMIT FUNCTION
 *
 * Renders a form for user to add new post or edit existing post.
 * Submiting or canceling redirects user home.
 */

function NewAndEditPostForm() {
  const INITIAL_DATA = {title: "", description: "", body: ""};
  const [postFormData, setPostFormData] = useState(INITIAL_DATA);
  const history = useHistory();

  function onSubmit(evt) {
    evt.preventDefault();
    //TBD

    redirectUpdateHistory()
  }

  function onChange(evt) {
    const {name, value} = evt.target;
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

  return(
    <form onSubmit={onSubmit}>
      <label htmlFor="title"></label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        placeholder="title"
        onChange={onChange}>
      </input>
      <label htmlFor="description"></label>
      <input
        id="description"
        name="description"
        type="text"
        value={description}
        placeholder="description"
        onChange={onChange}>
      </input>
      <label htmlFor="body"></label>
      <textarea
        id="body"
        name="body"
        value={body}
        placeholder="body"
        onChange={onChange}>
      </textarea>
      <button id="save">Save</button>
      <button
        type="button"
        onClick={redirectUpdateHistory}
        id="cancel">
        Cancel</button>
    </form>
  );
}

export default NewAndEditPostForm;