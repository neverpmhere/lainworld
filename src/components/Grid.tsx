// src/components/Grid.tsx
import React, { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { GridHelper } from 'three';

interface GridProps {
  rotation?: [number, number, number];
}

const Grid: React.FC<GridProps> = ({ rotation = [0, 0, 0] }) => {
  const { scene } = useThree();

  useMemo(() => {
    const gridHelper = new GridHelper(500, 50, 'white', 'gray');
    gridHelper.rotation.set(...rotation);
    gridHelper.renderOrder = 0; // Устанавливаем порядок рендеринга ниже, чем у объектов
    scene.add(gridHelper);
    return () => {
      scene.remove(gridHelper);
    };
  }, [scene, rotation]);

  return null;
};

export default Grid;



