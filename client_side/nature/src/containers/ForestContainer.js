import ForestSlider from "../components/ForestSlider";


const ForestContainer = ({ slides, onSlideChange }) => {

  const containerStyles = {
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={containerStyles}>
      <ForestSlider slides={slides} onSlideChange={onSlideChange}/>
    </div>
  );
};

export default ForestContainer;

