import { GoMute, GoUnmute } from "react-icons/go";

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

export default PlayButton;

