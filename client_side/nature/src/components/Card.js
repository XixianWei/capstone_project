import React, { useState } from 'react';
import './Card.css';

const Card = ({ currentForestData, selectedForestId }) => {
  const selectedForest = currentForestData.length > 0 ? (currentForestData.find((forest) => forest.id === selectedForestId) || currentForestData.find((forest) => forest.id === 1)) : null;

  const [cards] = useState([
    {
      title: selectedForest ? selectedForest.name : 'Forest Name | ' ,
      text: selectedForest ? selectedForest.description : 'Forest description',
    },
    {
      title: 'Sponsor a Forest',
      text: 'Join us in preserving natures beauty. Sponsor our forest in Yellowstone National Park today and help protect our planet for future generations.',
    },
  ]);

  return (
    <section>
      <div className='card-container'>
        <div className='cards'>
          {cards.map((card, i) => (
            <div key={i} className='card'>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
