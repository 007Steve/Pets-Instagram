import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Post({ profilePic, image, username, likes }) {
  return (
    <div className="post">
      <div className="post__item">
      
        <div className="post__info">
        <img id="post__image"src={image} alt="" />
        <div className="post__infoContainer">

        <div className="post_profile">
            <Avatar id="profile__image" src={profilePic} />
            <h4>{username}</h4>
          </div>

          <div className="post_icons">
            <h4>{likes} Likes</h4>
            <FavoriteBorderIcon className="post_icon" />
            <ChatBubbleOutlineIcon className="post_icon" />
            <SendOutlinedIcon className="post_icon" />
            <MoreHorizIcon className="post_icon" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
