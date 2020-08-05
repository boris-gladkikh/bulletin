import React from "react";
import './Comment.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//renders individual comment card, with  delete comment functionality

function Comment({ postId, commentId, text, deleteComment, datePosted }) {


  function handleDelete() {
    deleteComment(postId, commentId)
  }

  console.log(datePosted)


  return (
    <li id={commentId}>
      <Card>
        <Card.Header>
        {datePosted}
        </Card.Header>
        <Card.Body className="text-left">
        {text} 
        <Button onClick={handleDelete}>X</Button>

        </Card.Body>


      </Card>
    </li>
  );
}

export default Comment;