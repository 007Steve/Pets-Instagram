import React from "react";
import "./App.css";
import Nav from "./Nav";
import Stories from "./Stories";
import PostContainer from "./PostContainer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Stories />
      <PostContainer />
    </div>
  );
}

export default App;
