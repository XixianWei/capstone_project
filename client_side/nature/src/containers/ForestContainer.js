import ForestSlider from "../components/ImageSlider";


const ForestContainer = ({ slides, onSlideChange }) => {
  const containerStyles = {
    height: "100vh",
    width: "auto",
    background: `url(${slides[0].url}) center center / cover no-repeat fixed`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1rem",
    boxSizing: "border-box",
  };

  return (
    <div style={containerStyles}>
      <ForestSlider slides={slides} onSlideChange={onSlideChange}/>
    </div>
  );
};

export default ForestContainer;

