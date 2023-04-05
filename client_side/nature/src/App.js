import './App.css';
import NavBar from './components/NavBar';
import MusicPlayer from './containers/MusicPlayerContainer';
import ForestContainer from './containers/ForestContainer';
import { useState , useEffect } from "react";
import getForestDataWithMedia from './components/ForestData';
import Card from './components/Card';

function App() {
  const [currentForestData, setCurrentForestData] = useState([]);
  const [selectedForestId, setSelectedForestId] = useState(1);

  useEffect(() => {
  const fetchData = async () => {
    const data = await getForestDataWithMedia();
    setCurrentForestData(data);
  };
  fetchData();
}, []);

const [currentSlideUrl, setCurrentSlideUrl] = useState(
  currentForestData.length > 0
    ? currentForestData.find((forest) => forest.id === selectedForestId).images[0].url
    : ""
);

const handleSlideChange = (newIndex) => {
  setCurrentSlideUrl(currentForestData.find((forest) => forest.id === selectedForestId).images[newIndex].url);
};

useEffect(() => {
  if (currentForestData.length > 0) {
    setCurrentSlideUrl(currentForestData.find((forest) => forest.id === selectedForestId).images[0].url);
  }
}, [selectedForestId, currentForestData]);
  useEffect(() => {
    document.body.style.backgroundImage = `url(${currentSlideUrl})`;
  }, [currentSlideUrl]);

  const containerStyles = {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${slides[0].url})`,
  };

  return (
    <>
      <MusicPlayer currentForestData={currentForestData} onSelectedForestIdChange={setSelectedForestId}/>
      <ForestContainer
        slides={currentForestData.find((forest) => forest.id === selectedForestId)?.images || []}
        onSlideChange={handleSlideChange}
      />
      <NavBar />
      <Card />
    </>
  );
}
export default App;