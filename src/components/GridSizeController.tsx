// src/components/GridSizeController.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GridSizeContextProps {
  gridSize: number;
  increaseGridSize: () => void;
  decreaseGridSize: () => void;
}

const GridSizeContext = createContext<GridSizeContextProps | undefined>(undefined);

export const GridSizeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gridSize, setGridSize] = useState<number>(16);

  const increaseGridSize = () => setGridSize((prev) => Math.min(512, prev * 2));
  const decreaseGridSize = () => setGridSize((prev) => Math.max(1, prev / 2));

  return (
    <GridSizeContext.Provider value={{ gridSize, increaseGridSize, decreaseGridSize }}>
      {children}
    </GridSizeContext.Provider>
  );
};

export const useGridSize = () => {
  const context = useContext(GridSizeContext);
  if (!context) {
    throw new Error('useGridSize must be used within a GridSizeProvider');
  }
  return context;
};



