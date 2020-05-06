import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";


/**
 * Renders Links to Blog home and yo add a new post.
 */
function Navigation() {

  return(
    <nav>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/new">Add a New Post</NavLink>
    </nav>
  )
}

export default Navigation;