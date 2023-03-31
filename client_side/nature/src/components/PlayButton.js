import { GoMute, GoUnmute} from 'react-icons/go';
import {useState} from 'react';

const PlayButton = ({}) =>{
    const [isMusicPlaying,setIsMusicPlaying] = useState(true);

  const toggleMusic = () => {
    setIsMusicPlaying(prevState => !prevState);
  }

  const getMusicButton = () => {
    if (isMusicPlaying) {
      return (
        <PlayButton
          icon={<GoMute size="22" />}
          text="Stop Music"
          onClick={toggleMusic}
        />
      );
    } else {
        
      return (
        <>
        <PlayButton
          icon={<GoUnmute size="22" />}
          text="Play Music"
          onClick={toggleMusic}
        />
        </>
      );
    }
  };
}

export default PlayButton;