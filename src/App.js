
import './App.css';
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {

  const state = useSelector((store) => store);
  console.log(state);
  return (
    <div className="App">
      <Display />
      <Form />
      <Hourglass />
    </div>
  );
}

export default App;
