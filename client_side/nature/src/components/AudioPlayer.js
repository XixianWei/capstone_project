import { useState, useEffect } from "react";

const AudioPlayer = ({ isPlaying, audioUrl }) => {
  const [audio] = useState(new Audio(audioUrl));

  useEffect(() => {
    if (isPlaying) {
      audio.src = audioUrl;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio, audioUrl]);

  return null;
};

export default AudioPlayer;


