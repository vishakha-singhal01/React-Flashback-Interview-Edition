import React, { useState } from "react";

// Custom hook to toggle boolean state
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

function App() {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div style={{ padding: "20px" }}>
      <h1>🧩 Custom Hook Example: useToggle</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
}

export default App;
