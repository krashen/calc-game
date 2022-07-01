// Plugins
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import StartButton from './components/startButtonComponent';

//Styles
import './App.css';

function App() {
  const gameStarted = useSelector(store => store.gameStarted);
  
  return (
    <div className={`App ${ gameStarted ? "gameStarted" : "gameStopped" }`}>
      <div className="displayContainer">
        <Display />
      </div>
      <Form />
      <StartButton />
      <Hourglass />
    </div>
  );
}

export default App;
