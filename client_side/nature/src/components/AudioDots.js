const AudioDots = ({ audioUrls, onDotClick }) => {
  return (
    <div className="audio-dots">
      {audioUrls.map((url, index) => (
        <span key={index} onClick={() => onDotClick(url)}>◯</span>
      ))}
    </div>
  )
}

export default AudioDots;


