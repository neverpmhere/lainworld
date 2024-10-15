// src/buttons/Button.tsx
import React from 'react';

interface ButtonProps {
  icon: string;
  backgroundColor: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, backgroundColor, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        width: '40px',          // Компактная ширина
        height: '40px',         // Компактная высота
        backgroundColor, 
        border: 'none', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        margin: '0 5px',        // Горизонтальный отступ для удобного расположения
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      <img src={icon} alt="button-icon" style={{ width: '70%', height: '70%' }} />
    </button>
  );
};

export default Button;

