import React, { useState, useCallback } from "react";

// Memoized child component
const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering: ${label}`);
  return (
    <button onClick={onClick} style={{ margin: "0.5rem" }}>
      {label}
    </button>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // useCallback to memoize the function
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>React.memo & useCallback</h1>
      <h2>Count: {count}</h2>

      <Button onClick={increment} label="➕ Increment" />

      <button onClick={() => setToggle((prev) => !prev)} style={{ marginTop: "1rem" }}>
        Toggle State: {toggle ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default App;
