import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation";
import PostList from "./PostList";
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post";




//renders parent routes as well as navigation bar

function App() {

  
  return (
    <div className="MicroBlog-App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/posts">
            <PostList /> 
          </Route>
          <Route exact path="/posts/:postId">
            <Post />
          </Route>
          <Route exact path="/new">
            < NewPost />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

