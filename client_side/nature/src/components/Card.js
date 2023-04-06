import { useState } from 'react';
import './Card.css';
import SponsorForestModal from './SponsorForestModal';

const Card = ({ currentForestData, selectedForestId }) => {
  const selectedForest = currentForestData.length > 0
    ? (currentForestData.find((forest) => forest.id === selectedForestId) || currentForestData.find((forest) => forest.id === 1))
    : null;

  const openWikipediaLink = () => {
      if (selectedForest && selectedForest.wikipediaUrl) {
        window.open(selectedForest.wikipediaUrl, '_blank');
      }
    };

  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const handleSponsorModalClose = () => setShowSponsorModal(false);
  const handleSponsorModalShow = () => setShowSponsorModal(true);


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
            <button onClick={handleSponsorModalShow}>Read More</button>
          </div>
        </div>
      </div>
      <SponsorForestModal
    show={showSponsorModal}
    setShow={setShowSponsorModal}
    handleClose={handleSponsorModalClose}
    handleShow={handleSponsorModalShow}
  />
    </section>
    
  );
};

export default Card;
