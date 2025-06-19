
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lifting State Up Example</h1>
      <CounterDisplay value={count} />
      <CounterButton onIncrement={handleIncrement} />
    </div>
  );
}

function CounterDisplay({ value }) {
  return <h2>Current Count: {value}</h2>;
}

function CounterButton({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}

export default App;
