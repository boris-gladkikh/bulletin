import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation";
import PostList from "./PostList";
import PostDetail from "./PostDetail"
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post"


/**
 * State
 * -- posts:
 * [{id: id, title: title,
 *   descrip :descrip,
 *   body: body}]
 */

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


/*
 return (
    <div className="MicroBlog-App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/posts">
            <PostList posts={posts} /> 
          </Route>
          <Route exact path="/posts/:id">
            <PostDetail
              deletePostFromState={deletePostFromState}
              posts={posts}
              editPostInState={editPostInState} />
          </Route>
          <Route exact path="/new">
            < NewPost />
            <NewAndEditPostForm addPostToState={addPostToState} />
          </Route>
          <Route exact path="/">
            <Home posts={posts} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

*/ 