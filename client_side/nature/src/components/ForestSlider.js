import { useState } from "react";

const ForestSlider = ({ slides , onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStylesMain = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundImage: "center",
    backgroundSize: "cover",
    backgroundImage: slides.length > 0 ? `url(${slides[currentIndex].url})` : "",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onSlideChange(newIndex);
  };

  const gotoNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onSlideChange(newIndex);
  };


  return (
    <div style={slideStylesMain}>
      <div style={leftArrowStyles} onClick={goToPrev}>
        ⇦
      </div>
      <div style={rightArrowStyles} onClick={gotoNext}>
        ⇨
      </div>
      <div style={slideStyles}></div>
  
      </div>

  );
};

export default ForestSlider;

