// src/components/OptionsMenu.tsx
import React from 'react';

interface OptionsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  enableScroll: boolean;
  onToggleScroll: () => void;
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ isOpen, onClose, enableScroll, onToggleScroll }) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: '50px',
        right: '10px',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '4px',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        color: 'black', // Устанавливаем цвет текста
        zIndex: 1000, // Устанавливаем высокий zIndex, чтобы меню было выше всех объектов
        width: '200px',
      }}
    >
      <button 
        onClick={onClose} 
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'none',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          color: 'black' // Цвет текста кнопки "X"
        }}
      >
        X
      </button>
      <div style={{ marginTop: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input type="checkbox" checked={enableScroll} onChange={onToggleScroll} />
          Enable Scroll
        </label>
      </div>
    </div>
  );
};

export default OptionsMenu;





