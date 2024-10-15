// src/components/GridManager.tsx
import React, { useState } from 'react';

interface GridManagerProps {
  initialSize: number;
  onSizeChange: (size: number) => void;
}

export const GridManager: React.FC<GridManagerProps> = ({ initialSize, onSizeChange }) => {
  const [gridSize, setGridSize] = useState(initialSize);

  const handleDecreaseSize = () => {
    if (gridSize > 1) {
      const newSize = gridSize / 2;
      setGridSize(newSize);
      onSizeChange(newSize);
    }
  };

  const handleIncreaseSize = () => {
    if (gridSize < 512) {
      const newSize = gridSize * 2;
      setGridSize(newSize);
      onSizeChange(newSize);
    }
  };

  return (
    <div>
      <button onClick={handleDecreaseSize}>Decrease Grid Size</button>
      <button onClick={handleIncreaseSize}>Increase Grid Size</button>
    </div>
  );
};


