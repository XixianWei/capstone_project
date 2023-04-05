// AudioPlayer.js
import { useState, useEffect } from "react";

const AudioPlayer = ({ isPlaying, audioUrl }) => {
  const [audio] = useState(new Audio());

  useEffect(() => {
    if (isPlaying && audioUrl) {
      audio.src = audioUrl;
      audio.type = audioUrl.endsWith(".wav") ? "audio/wav" : "audio/mp3";
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio, audioUrl]);

  return null;
};

export default AudioPlayer;
