import React from 'react';
import './Card.css';

const Card = ({ currentForestData, selectedForestId }) => {
  const selectedForest = currentForestData.length > 0
    ? (currentForestData.find((forest) => forest.id === selectedForestId) || currentForestData.find((forest) => forest.id === 1))
    : null;

  const openWikipediaLink = () => {
      if (selectedForest && selectedForest.wikipediaUrl) {
        window.open(selectedForest.wikipediaUrl, '_blank');
      }
    };


  return (
    <section>
      <div className='card-container'>
        <div className='cards'>
          <div className='card'>
          <h3>{selectedForest ? `${selectedForest.name} | ${selectedForest.location}` : 'Forest Name | Location'}</h3>
            <p>{selectedForest ? selectedForest.information : 'Forest description'}</p>
            <button onClick={openWikipediaLink}>Read More</button>
          </div>
          <div className='card'>
            <h3>Sponsor a Forest</h3>
            <p>Join us in preserving natures beauty. Sponsor our forest in Yellowstone National Park today and help protect our planet for future generations.</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
