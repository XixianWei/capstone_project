import React, { useState, useEffect } from 'react';

const Footer = ( { currentForestData, selectedForestId } ) => {
  const selectedForest = currentForestData.find((forest) => forest.id === selectedForestId) || currentForestData.find((forest) => forest.id === 1);

  return (
    <>
    <footer>
      {selectedForest ? (
        <div>
          <h2>{selectedForest.name} | {selectedForest.location}</h2>
          <h2>Information: {selectedForest.information}</h2>
        </div>) : (
          <p>Select a forest</p>
        )
      }
    </footer>
    </>
  );
};

export default Footer;
