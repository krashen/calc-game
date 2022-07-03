// Plugins
import React from 'react';
import { bindActionCreators} from 'redux';

// Components
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import StartButton from './components/startButtonComponent';
import ScoreTable from './components/scoresTableComponent';
import Lights from './components/lightsComponent';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './indexActionCreators';
import { persistor } from './store/index';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const store = useSelector(store => store);
  const gameInitialized = store.gameInitialized;
  const level = store.level;
  const dispatch = useDispatch();
  const { resetScore } = bindActionCreators(actionCreators, dispatch);
  const purgeScore = () => {
    const input = window.prompt("Type 'delete' if you want to reset the score\nThis action can't be undone");
    if (input === "delete") {
      resetScore();
      persistor.purge();
    } 
  }
  
  return (
    <div className={`App ${ gameInitialized ? "gameInitialized" : "gameFinished" }`}>
      <div className="boardContainer">
        <div className="buttonAndDisplay">
          <StartButton />
          <div className="displayContainer">
            <Display />
          </div>
          <Lights level={level} />
        </div>
        <Form />
        <Hourglass />
      </div>
      <ScoreTable />
      <button className="resetButton" onClick={purgeScore}>Reset Score</button>
    </div>
  );
}

export default App;
