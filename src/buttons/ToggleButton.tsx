// src/buttons/ToggleButton.tsx
import React from 'react';

interface ToggleButtonProps {
  onClick: () => void;
  isCameraMode: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, isCameraMode }) => {
  return (
    <button onClick={onClick} style={{ margin: '0 10px', padding: '10px', cursor: 'pointer', backgroundColor: '#ADD8E6', border: 'none', borderRadius: '5px' }}>
      {isCameraMode ? 'Переключить на Мышь' : 'Переключить на Камеру'}
    </button>
  );
};

export default ToggleButton;


