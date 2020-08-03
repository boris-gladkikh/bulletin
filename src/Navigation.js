import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";


/**
 * Renders Links to Blog home and yo add a new post.
 */
function Navigation() {

  return(
    <nav>
      <div className="title">BULLETIN</div>
      <h2>SHARE YOUR THOUGHTS WITH YOUR PEERS!
      </h2>
      <NavLink to="/">HOME</NavLink>
      <NavLink exact to="/new">ADD POST</NavLink>
    </nav>
  )
}

export default Navigation;