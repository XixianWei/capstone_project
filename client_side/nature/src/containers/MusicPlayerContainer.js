import { useState } from "react";
import AudioDots from "../components/AudioDots";
import AudioPlayer from "../components/AudioPlayer";
import PlayButton from "../components/PlayButton";

const MusicPlayerContainer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudioUrl, setCurrentAudioUrl] = useState(
    `${process.env.PUBLIC_URL}/asessts/sounds/gaio.wav`
  );

  const handleToggleMusic = (isMusicPlaying) => {
    setIsPlaying(isMusicPlaying);
  };

  const handleDotClick = (audioUrl) => {
    setCurrentAudioUrl(audioUrl);
    setIsPlaying(true);
  };

  return (
    <>
      <AudioPlayer isPlaying={isPlaying} audioUrl={currentAudioUrl}/>
      <PlayButton isPlaying={isPlaying} onClick={handleToggleMusic} />
      <AudioDots audioUrls={[
        `${process.env.PUBLIC_URL}/asessts/sounds/gaio.wav`,
        `${process.env.PUBLIC_URL}/asessts/sounds/haguro.mp3`,
        `${process.env.PUBLIC_URL}/asessts/sounds/plateau.mp3`,
        `${process.env.PUBLIC_URL}/asessts/sounds/yellowStone.wav`
      ]} onDotClick={handleDotClick} />
    </>
  );
};

export default MusicPlayerContainer;


