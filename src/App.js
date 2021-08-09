import React from 'react';
import './App.css';

const { useState } = React;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {
        // if else statement to determine color of the counter
      }
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
        {count}
      </h1>
      <div className="button__wrapper">
        <button onClick={() => setCount(count - 1)}><i class="fa fa-minus" aria-hidden="true"></i></button>
        <button onClick={() => setCount(0)}><i class="fa fa-refresh" aria-hidden="true"></i></button>
        <button onClick={() => setCount(count + 1)}><i class="fa fa-plus" aria-hidden="true"></i></button>
      </div>
    </div>
  );
}

export default App;
