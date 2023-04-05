import './App.css';
import NavBar from './components/NavBar';
import MusicPlayer from './containers/MusicPlayerContainer';
import ForestContainer from './containers/ForestContainer';
import { useState , useEffect } from "react";
import getForestDataWithMedia from './components/ForestData';


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



  

  return (
    <div className="App">
    <>
      <ForestContainer
        slides={currentForestData.find((forest) => forest.id === selectedForestId)?.images || []}
        onSlideChange={handleSlideChange}
      />
     <MusicPlayer currentForestData={currentForestData} onSelectedForestIdChange={setSelectedForestId}/>
      <NavBar />
    </>
    </div>
  );
}
export default App;