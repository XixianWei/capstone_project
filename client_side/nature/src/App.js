import './App.css';
import NavBar from './components/NavBar';
import MusicPlayer from './Containers/MusicPlayerContainer';
import ForestContainer from './Containers/ForestContainer';
import ImageSlider from './components/ImageSlider.js';
import { useState , useEffect } from "react";
import Card from './components/Card'


function App() {
  const slides = [
    {url: 'http://localhost:3000/asessts/img/forests/yellowStone/ys_1.jpg',title:'yellow stone 1'},
    {url: 'http://localhost:3000/asessts/img/forests/yellowStone/ys_2.jpg',title:'yellow stone 2'},
    {url: 'http://localhost:3000/asessts/img/forests/yellowStone/ys_3.jpg',title:'yellow stone 3'},
    {url: 'http://localhost:3000/asessts/img/forests/yellowStone/ys_4.jpg',title:'yellow stone 4'}
  ];

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
      <MusicPlayer />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <NavBar />
      <Card />
    </>
  );
}

export default App;