import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Basic effect – run on every render
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Cleanup example
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("⏱️ Timer running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("🧹 Timer cleared");
    };
  }, [show]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Hook Example</h1>

      <p>Open your console and watch the logs 👇</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default App;
