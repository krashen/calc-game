
import './App.css';
import { Display, } from './components/'

function App() {
  return (
    <div className="App">
      <CalcDisplay className="display" calcString={} />
      <CalcInput />
      <Sandclock time={} />
      <Board scores={} />
    </div>
  );
}

export default App;
