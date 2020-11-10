import React from "react";
import "./PostContainer.css";
import Post from "./Post";
function PostContainer() {
  return (
    <div className="postContainer">
      <Post
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-iBo2YlWhOGWEkxOM3hbeG09a7LggTiSmLu3bq=s32-c-mo"
        image="https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Steve00"
        likes=""
      />
      <Post
        profilePic=""
        image="https://images.pexels.com/photos/2791684/pexels-photo-2791684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username=""
        likes=""
      />
      <Post
        profilePic=""
        image="https://images.pexels.com/photos/2007/animal-dog-pet-cute.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username=""
        likes=""
      />
    </div>
  );
}

export default PostContainer;
