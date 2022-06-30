
import './App.css';
import Display from './components/displayComponent';
import Form  from './components/formComponent';
import Hourglass from './components/hourglassComponent';
import React from 'react';
import { useSelector } from 'react-redux';
import { generateSum } from './helpers/index';

function App() {
  const level = useSelector(store => store.level);
  const [val1, val2] = generateSum(level);
  return (
    <div className="App">
      <Display currentSum={val1.toString()} />
      <Display currentSum={"+"} />
      <Display currentSum={val2.toString()} />
      <Form />
      <Hourglass />
    </div>
  );
}

export default App;
