import React, { useState, useRef } from "react";

const App = () => {
  const [controlledInput, setControlledInput] = useState("");
  const uncontrolledRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled: ${controlledInput} \nUncontrolled: ${uncontrolledRef.current.value}`);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Controlled vs Uncontrolled Components</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Controlled Input */}
        <label>
          Controlled Input:
          <input
            type="text"
            value={controlledInput}
            onChange={(e) => setControlledInput(e.target.value)}
            style={{ margin: "0.5rem" }}
          />
        </label>

        {/* Uncontrolled Input */}
        <label>
          Uncontrolled Input:
          <input type="text" ref={uncontrolledRef} defaultValue="Uncontrolled" style={{ margin: "0.5rem" }} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
