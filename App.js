import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        
        

        <p>count: {count}</p>
        <button onClick={() => setCount (count + 1)}>Increase Count</button>
        <button onClick ={() => setCount (count - 1)}>Decrease Count</button>


      
        
      </header>
    </div>
  );
}

export default App;
