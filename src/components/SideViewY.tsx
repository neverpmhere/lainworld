// src/components/SideViewY.tsx
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Grid from './Grid';
import Object3D from './Object3D';
import { Vector3, Camera } from 'three';

interface SideViewYProps {
  enableScroll: boolean;
}

const SideViewY: React.FC<SideViewYProps> = ({ enableScroll }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<Camera | null>(null);
  const scrollSpeed = 0.05;

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (cameraRef.current) {
      const direction = new Vector3(0, 0, -1);
      cameraRef.current.position.addScaledVector(direction, event.deltaY * scrollSpeed);
    }
  };

  return (
    <div 
      ref={containerRef}
      onWheel={enableScroll ? handleWheel : undefined}
      style={{ width: '100%', height: '100%', backgroundColor: 'black', overflow: 'hidden' }}
    >
      <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 20, up: [0, 1, 0], near: 0.1, far: 500 }} onCreated={({ camera }) => (cameraRef.current = camera)}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Grid rotation={[Math.PI / 2, 0, 0]} />
        <Object3D position={[0, 0, 0]} color="green" />
        <OrbitControls enableRotate={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default SideViewY;








