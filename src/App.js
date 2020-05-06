import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "./Navigation";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import Home from "./Home";
import NewAndEditPostForm from "./NewAndEditPostForm";


/**
 * TBD
 */

function App() {
  return (
    <div className="MicroBlog-App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path= "/posts">
            <PostList/>
          </Route>
          <Route exact path= "/posts/:id">
            <PostDetail/>
          </Route>
          <Route exact path= "/new">
            <NewAndEditPostForm/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
