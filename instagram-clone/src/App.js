import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>Instagram Clone</h1>

      <Post
        username="JohnDoe"
        caption="Wow, it works!"
        imageUrl="https://cdn-media-1.freecodecamp.org/images/xn6oqsiP9ZUwYN98Yidh-Obr7UhkAHHqcFvh"
      />
      <Post username="MikeBoo" caption="Cope!" />
      <Post username="AliceSue" caption="This is a fun project!" />
    </div>
  );
}

export default App;
