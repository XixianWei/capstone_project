const AudioDots = ({ currentForestData, onDotClick }) => {
  return (
    <div className="audio-dots">
      {currentForestData.map((forest, index) => (
        <span key={index} onClick={() => onDotClick(forest.sounds[0], forest.id)}>
          ⬤
        </span>
      ))}
    </div>
  );
};

export default AudioDots;
