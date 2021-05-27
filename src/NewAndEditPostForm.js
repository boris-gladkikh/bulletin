import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NewAndEditPostForm.css';

/**
 * Renders a form for user to add new post or edit existing post.
 * Submiting or canceling redirects user home.
 */

function NewAndEditPostForm({ addPost, editPost, editId, post }) {
  const BLANK_FORM = { title: "", description: "", body: "" };
  let prefillForm = (editId === undefined) ? BLANK_FORM : post

  const [postFormData, setPostFormData] = useState(prefillForm);
  const history = useHistory();

  //determines wether we are adding or editing a post, then executes appropriate function based on existence of edit data.

  function handleSubmit(evt) {
    evt.preventDefault();
    var newId = uuidv4();

    if (editId !== undefined) {
      editPost(editId, postFormData);
    } else {
      addPost(newId, postFormData);
    }
    setPostFormData(BLANK_FORM);
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


  return (

        <Form className="m-auto w-75" float="center" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label><br />
            <Form.Control
              id="title"
              size="lg"
              name="title"
              type="text"
              value={title}
              placeholder="Title"
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label><br />
            <Form.Control
              id="description"
              name="description"
              size="lg"
              type="text"
              value={description}
              placeholder="Description"
              onChange={onChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label><br />
            <Form.Control
              id="body"
              name="body"
              value={body}
              size="lg"
              placeholder="Be Descriptive!"
              onChange={onChange}
              as="textarea"
              rows="3"
              required
            />

          </Form.Group>
          <Button type="submit" className="ml-2" id="save">Save</Button>
          <Button
            className="ml-2"
            type="button"
            onClick={redirectUpdateHistory}
            id="cancel">
            Cancel</Button>

        </Form>
  );
}

export default NewAndEditPostForm;