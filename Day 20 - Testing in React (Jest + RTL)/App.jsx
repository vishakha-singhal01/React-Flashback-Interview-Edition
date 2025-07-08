import React, { useState } from "react";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>React Testing Example</h1>

      <button onClick={() => setClicked(true)}>Click Me</button>
      {clicked && <p>You clicked the button!</p>}

      <input
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Input: {input}</p>
    </div>
  );
};

export default App;
