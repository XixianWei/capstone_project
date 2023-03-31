import { useState,useEffect } from "react";

const AudioPlayer = (isMusicPlaying) => {
    const [isPlaying , setIsPlaying] = useState(false);
    const audio = new Audio(`${process.env.PUBLIC_URL}/sounds.public.mp3`);

    useEffect(() => {
        const handleMusic = () => {
          if (isMusicPlaying) {
            audio.play();
            setIsPlaying(true);
          } else {
            audio.pause();
            setIsPlaying(false);
          }
        };

        audio.volume = 0.3;

        handleMusic();

        return () => {
          audio.pause();
          setIsPlaying(false);
        };
      }, [isMusicPlaying]);
    
      return null;

}

export default AudioPlayer;