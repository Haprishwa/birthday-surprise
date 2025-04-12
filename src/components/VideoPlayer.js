import React from "react";
import "../styles.css";

const VideoPlayer = ({ onVideoEnd }) => {
  return (
    <div className="video-container">
      <video className="video-player" controls autoPlay onEnded={onVideoEnd}>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
