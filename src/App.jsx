import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count);
};

  return (
    <div className="App">
      <h1>UseState</h1>
      <button onClick={handleClick}>＋</button>
      <p>{count}</p>
    </div>
  )
}

export default App
