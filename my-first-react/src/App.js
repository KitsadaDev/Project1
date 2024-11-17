import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
const App = () => {
  return (
    <div className="ui container comments">
      <Post studentName = "ess" score = "78" />
      <Post studentName = "boyd" score = "830" />
    </div>
  );
}
export default App;