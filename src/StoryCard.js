import React from "react";
import "./StoryCard.css";

function StoryCard({ picture, username }) {
  return (
    <div className="storiesCard">
      <img src={picture} alt="" />
      <p>{username}</p>
    </div>
  );
}

export default StoryCard;
