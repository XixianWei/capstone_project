import { useState } from "react";
import AudioDots from "../components/AudioDots";
import AudioPlayer from "../components/AudioPlayer";
import PlayButton from "../components/PlayButton";

const MusicPlayerContainer = ({ currentForestData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAudioUrl, setSelectedAudioUrl] = useState(
    `${process.env.PUBLIC_URL}/assets/sounds/1.wav`
  );

  const handleToggleMusic = (isMusicPlaying) => {
    setIsPlaying(isMusicPlaying);
  };

  const handleDotClick = (audioUrl) => {
    console.log(currentForestData);
    setSelectedAudioUrl(audioUrl);
    setIsPlaying(true);
  };

  return (
    <>
      <AudioPlayer isPlaying={isPlaying} audioUrl={selectedAudioUrl} />
      <PlayButton isPlaying={isPlaying} onClick={handleToggleMusic} />
      <AudioDots currentForestData={currentForestData} onDotClick={handleDotClick} />
    </>
  );
};

export default MusicPlayerContainer;
