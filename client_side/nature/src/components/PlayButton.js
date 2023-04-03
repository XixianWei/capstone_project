import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";


const PlayButton = ({ isPlaying, onClick }) => {
  const handleClick = () => {
    onClick(!isPlaying);
  };

  return (
    <button onClick={handleClick} className="play-button">
{isPlaying ? (
  <>
    <FontAwesomeIcon icon={faStop} size="2x" />
  </>
) : (
  <>
    <FontAwesomeIcon icon={faPlay} size="2x" />
  </>
)}

    </button>
  );
};

export default PlayButton;
