
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Vishakha");
  const [count, setCount] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useState Hook Example</h1>

      <div>
        <label>Your Name: </label>
        <input value={name} onChange={handleNameChange} />
        <p>Hello, {name}!</p>
      </div>

      <hr />

      <div>
        <h2>Counter</h2>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
