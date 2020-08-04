import React from "react";
import PostList from "./PostList";

/**
 * Renders welcome message and PostList component
 */

function Home() {
  return (
    <div className="mt-5">
      <h2>Latest Posts:</h2>
      <PostList />
    </div>
  );
}

export default Home;