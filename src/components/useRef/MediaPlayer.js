import React, { useState, useRef } from "react";

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();

  const playHandler = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>Media Player</h1>
      <div>
        <video width="400" ref={videoRef} onClick={playHandler}>
          <source src="assets/video.mp4" type="video/mp4"></source>
        </video>
      </div>
      <button onClick={playHandler}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;
