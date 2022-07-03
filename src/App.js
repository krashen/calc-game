// Plugins
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import StartButton from './components/startButtonComponent';
import ScoreTable from './components/scoresTableComponent';

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const gameInitialized = useSelector(store => store.gameInitialized);
  
  return (
    <div className={`App ${ gameInitialized ? "gameInitialized" : "gameFinished" }`}>
      <div className="displayContainer">
        <Display />
      </div>
      <Form />
      <StartButton />
      <Hourglass />
      <ScoreTable />
    </div>
  );
}

export default App;
