import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";


/**
 * Renders Links to Blog home and yo add a new post.
 */
function Navigation() {

  return(
    <nav>
      <h1>MicroBlog</h1>
      <h6>Innovative One Of A Kind Blog Application</h6>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/new">Add a New Post</NavLink>
    </nav>
  )
}

export default Navigation;