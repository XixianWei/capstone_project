import './App.css';
import NavBar from './components/NavBar';
import MusicPlayer from './containers/MusicPlayerContainer';
import ForestContainer from './containers/ForestContainer';
import { useState , useEffect } from "react";

function App() {
  const slides = [
    {url: 'http://localhost:3000/asessts/img/forests/yellowStone/ys_1.jpg',title:'yellow stone 1'},
    {url: 'http://localhost:3000/asessts/img/forests/yellowStone/ys_2.jpg',title:'yellow stone 2'},
    {url: 'http://localhost:3000/asessts/img/forests/yellowStone/ys_3.jpg',title:'yellow stone 3'},
    // {url: 'http://localhost:3000/asessts/img/forests/yellowStone.ys_4.jpg',title:'yellow stone 4'}
  ];

  const [currentSlideUrl, setCurrentSlideUrl] = useState(slides[0].url);

  const handleSlideChange = (newIndex) => {
    setCurrentSlideUrl(slides[newIndex].url);
  }

  useEffect(() => {
    document.body.style.backgroundImage = `url(${currentSlideUrl})`;
  }, [currentSlideUrl]);

  return (
    <>
      <NavBar />
      <MusicPlayer />
      <ForestContainer slides={slides} onSlideChange={handleSlideChange} />
      <style>{`
        body {
          background-image: url(${currentSlideUrl});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          height: 100vh;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: -1;
        }
      `}</style>
      <div className="overlay"></div>
    </>
  );
}

export default App;


