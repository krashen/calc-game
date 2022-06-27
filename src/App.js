
import './App.css';
import Display from './components/displayComponent'
import { useSelector } from "react-redux";
import React from "react";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className="App">
      <Display className="display" value={state.current} />     
    </div>
  );
}

export default App;
