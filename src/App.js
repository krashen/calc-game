// Plugins
import React from 'react';

// Components
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import StartButton from './components/startButtonComponent';

//Styles
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="displayBox">
        <Display />
      </div>
      <Form />
      <StartButton />
      <Hourglass />
    </div>
  );
}

export default App;
