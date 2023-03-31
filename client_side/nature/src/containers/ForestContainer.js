import { useState } from "react";
import ForestList from "./ForestList";
import Forest from "./Forest";

const ForestContainer = () => {
  const [selectedForest, setSelectedForest] = useState("");

  const handleSelectForest = (forestName) => {
    setSelectedForest(forestName);
  };

  return (
    <div>
      <ForestList onSelectForest={handleSelectForest} />
      {selectedForest && (
        <Forest
          forestName={selectedForest}
          onDeselectForest={() => setSelectedForest("")}
        />
      )}
    </div>
  );
};

export default ForestContainer;
