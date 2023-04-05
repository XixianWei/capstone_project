import { useState } from "react";
import AudioDots from "../components/AudioDots";
import AudioPlayer from "../components/AudioPlayer";
import Card from "../components/Card";
import PlayButton from "../components/PlayButton";


const MusicPlayerContainer = ({ currentForestData, onSelectedForestIdChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAudioUrl, setSelectedAudioUrl] = useState(
    `${process.env.PUBLIC_URL}/assets/sounds/1.wav`
  );
  const [selectedForestId, setSelectedForestId] = useState(null);

  const handleToggleMusic = (isMusicPlaying) => {
    setIsPlaying(isMusicPlaying);
  };

  const handleDotClick = (audioUrl, forestId) => {
    console.log(currentForestData);
    setSelectedAudioUrl(audioUrl);
    setIsPlaying(true);
    setSelectedForestId(forestId);
    onSelectedForestIdChange(forestId);
  };

 

  return (
    <>
      <AudioPlayer isPlaying={isPlaying} audioUrl={selectedAudioUrl} />
      <PlayButton isPlaying={isPlaying} onClick={handleToggleMusic} />
      <AudioDots currentForestData={currentForestData} onDotClick={handleDotClick} />
      <Card currentForestData={currentForestData} selectedForestId ={selectedForestId}/>
    </>
  );
};

export default MusicPlayerContainer;
