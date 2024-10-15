// src/components/Object3D.tsx
import React from 'react';

interface Object3DProps {
  position: [number, number, number];
  color: string;
}

const Object3D: React.FC<Object3DProps> = ({ position, color }) => {
  return (
    <mesh position={position} renderOrder={1}> {/* Устанавливаем порядок рендеринга */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Object3D;


