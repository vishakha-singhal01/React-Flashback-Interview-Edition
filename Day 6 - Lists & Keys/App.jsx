import React, { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

  const addFruit = () => {
    const newFruit = prompt("Enter a fruit name:");
    if (newFruit) {
      setFruits([...fruits, newFruit]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Lists & Keys Demo</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
}

export default App;
