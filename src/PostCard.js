import React from 'react';
import { Link } from "react-router-dom";
import "./PostCard.css"

//individual post card for post list parent, listing title and brief description with a link to the post's detail page

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