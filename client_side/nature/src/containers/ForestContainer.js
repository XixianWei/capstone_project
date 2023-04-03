import ForestSlider from "../components/ForestSlider";


const ForestContainer = ({ slides, onSlideChange }) => {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyles}>
      <ForestSlider slides={slides} onSlideChange={onSlideChange}/>
    </div>
  );
};

export default ForestContainer;

