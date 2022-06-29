
import './App.css';
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const score = useSelector(store => store.score);
  return (
    <div className="App">
      <Display currentSum={score.toString()} />
      <Form />
      <Hourglass />
    </div>
  );
}

export default App;
