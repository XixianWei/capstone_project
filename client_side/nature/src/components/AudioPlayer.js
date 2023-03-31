import { useState, useEffect } from "react";
import { GoMute, GoUnmute } from "react-icons/go";

const AudioPlayer = ({ isPlaying }) => {
  const [audio] = useState(new Audio(`${process.env.PUBLIC_URL}/sounds/forest1.wav`));

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return null;
};

const PlayButton = ({ isPlaying, onClick }) => {
  const handleClick = () => {
    onClick(!isPlaying);
  };

  return (
    <button onClick={handleClick}>
      {isPlaying ? (
        <>
          <GoMute size="22" />
          Stop Music
        </>
      ) : (
        <>
          <GoUnmute size="22" />
          Play Music
        </>
      )}
    </button>
  );
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleMusic = (isMusicPlaying) => {
    setIsPlaying(isMusicPlaying);
  };

  return (
    <>
      <AudioPlayer isPlaying={isPlaying} />
      <PlayButton isPlaying={isPlaying} onClick={handleToggleMusic} />
    </>
  );
};

export default MusicPlayer;
