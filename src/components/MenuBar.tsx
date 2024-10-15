// src/components/MenuBar.tsx
import React from 'react';
import Button from '../buttons/Button';
import searchIcon from '../assets/icons/search.png';
import cameraIcon from '../assets/icons/camera.png';
import lightIcon from '../assets/icons/light.png';
import cubeIcon from '../assets/icons/cube.png';
import faceIcon from '../assets/icons/face.png';
import vertexIcon from '../assets/icons/vertex.png';
import edgeIcon from '../assets/icons/edge.png';
import moveIcon from '../assets/icons/move.png';
import rotateIcon from '../assets/icons/rotate.png';
import scaleIcon from '../assets/icons/scale.png';
import optionsIcon from '../assets/icons/options.png';

interface MenuBarProps {
  isCameraMode: boolean;
  toggleCameraMode: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ isCameraMode, toggleCameraMode }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#E0FFFF', padding: '10px', borderBottom: '2px solid #ADD8E6', color: 'black' }}>
      <Button icon={searchIcon} backgroundColor="#ff5c5c" onClick={() => console.log('Search tool')} />
      <Button icon={cameraIcon} backgroundColor={isCameraMode ? "#ff5c5c" : "#8ec0ff"} onClick={toggleCameraMode} />
      <Button icon={lightIcon} backgroundColor="#8ec0ff" onClick={() => console.log('Light tool')} />
      <Button icon={cubeIcon} backgroundColor="#8ec0ff" onClick={() => console.log('Cube tool')} />
      <Button icon={faceIcon} backgroundColor="#b39ddb" onClick={() => console.log('Face tool')} />
      <Button icon={vertexIcon} backgroundColor="#b39ddb" onClick={() => console.log('Vertex tool')} />
      <Button icon={edgeIcon} backgroundColor="#b39ddb" onClick={() => console.log('Edge tool')} />
      <Button icon={moveIcon} backgroundColor="#ffe082" onClick={() => console.log('Move tool')} />
      <Button icon={rotateIcon} backgroundColor="#ffe082" onClick={() => console.log('Rotate tool')} />
      <Button icon={scaleIcon} backgroundColor="#ffe082" onClick={() => console.log('Scale tool')} />
      <Button icon={optionsIcon} backgroundColor="#9e9e9e" onClick={() => console.log('Options tool')} />
    </div>
  );
};

export default MenuBar;




