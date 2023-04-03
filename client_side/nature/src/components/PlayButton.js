import { GoMute, GoUnmute } from "react-icons/go";

const PlayButton = ({ isPlaying, onClick }) => {
  const handleClick = () => {
    onClick(!isPlaying);
  };

  return (
    <button onClick={handleClick} className="play-button">
      {isPlaying ? (
        <>
          <GoMute size="22" />
          <span className="button-text">Stop Music</span>
        </>
      ) : (
        <>
          <GoUnmute size="22" />
          <span className="button-text">Play Music</span>
        </>
      )}
    </button>
  );
};

export default PlayButton;
