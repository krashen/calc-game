
import './App.css';
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Display />
      <Form />
      <Hourglass />
    </div>
  );
}

export default App;
