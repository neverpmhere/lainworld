// src/App.tsx
import React, { useState } from 'react';
import WorldView from './components/WorldView';
import TopView from './components/TopView';
import SideViewX from './components/SideViewX';
import SideViewY from './components/SideViewY';
import MenuBar from './components/MenuBar';
import OptionsMenu from './components/OptionsMenu';

const App: React.FC = () => {
  const [isCameraMode, setIsCameraMode] = useState<boolean>(true);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [enableScroll, setEnableScroll] = useState<boolean>(false); // Default value to false, as you wanted scroll removed

  const toggleCameraMode = () => {
    setIsCameraMode(!isCameraMode);
  };

  const toggleOptionsMenu = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const toggleScroll = () => {
    setEnableScroll(!enableScroll);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <MenuBar isCameraMode={isCameraMode} toggleCameraMode={toggleCameraMode} />
      <button onClick={toggleOptionsMenu} style={{ position: 'fixed', top: 10, right: 10 }}>Options</button>
      <OptionsMenu 
        isOpen={isOptionsOpen} 
        onClose={toggleOptionsMenu} 
        enableScroll={enableScroll} 
        onToggleScroll={toggleScroll} 
      />
      <div style={{ width: '95vw', height: '95vh', margin: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '10px', flex: '1' }}>
        <WorldView />
        <TopView enableScroll={enableScroll} />
        <SideViewX enableScroll={enableScroll} />
        <SideViewY enableScroll={enableScroll} />
      </div>
    </div>
  );
};

export default App;









