// Plugins
import React from 'react';
import { bindActionCreators} from 'redux';

// Components
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import StartButton from './components/startButtonComponent';
import ScoreTable from './components/scoresTableComponent';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './indexActionCreators';
import { persistor } from './store/index';

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const gameInitialized = useSelector(store => store.gameInitialized);
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
      <div className="displayContainer">
        <Display />
      </div>
      <Form />
      <StartButton />
      <Hourglass />
      <ScoreTable />
      <button className="resetButton" onClick={purgeScore}>Reset Score</button>
    </div>
  );
}

export default App;
