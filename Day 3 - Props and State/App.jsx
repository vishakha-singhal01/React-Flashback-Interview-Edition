import React, { useState } from 'react';

// Component that receives props
const Welcome = ({ name }) => {
  return <h2>Hello, {name} 👋</h2>;
};

// Component that manages state
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '1rem' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>React Flashback: Day 3</h1>
      <Welcome name="Vishakha" />
      <Counter />
    </div>
  );
}

export default App;
