import React from 'react';
import { Link } from "react-router-dom";
import "./PostCard.css"

//individual post card for post list parent, listing title and brief description with a link to the post's detail page

function PostCard({ title, description, id }) {
  return (
    <Link to={`/posts/${id}`}>
      <div className="postCard">
        <h2> {title}</h2>
        <p>{description}</p>
      </div>
    </Link>



  );
}

export default PostCard;