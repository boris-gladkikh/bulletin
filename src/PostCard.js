import React from 'react';
import { Link } from "react-router-dom";
import "./PostCard.css"


function PostCard({ title, description, id }) {
  return (
    <div className="postCard">
      <Link to={`/posts/${id}`}>
        <h3> {title}</h3>
      </Link>
      <p>{description}</p>
    </div>

  );
}

export default PostCard;