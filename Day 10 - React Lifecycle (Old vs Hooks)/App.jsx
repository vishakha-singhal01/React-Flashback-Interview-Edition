import React, { useEffect, useState } from "react";

// Functional Component using Hooks
function App() {
  const [count, setCount] = useState(0);

  // Mount
  useEffect(() => {
    console.log("✅ Mounted (componentDidMount)");
  }, []);

  // Update
  useEffect(() => {
    if (count > 0) {
      console.log("🔁 Updated (componentDidUpdate) - Count changed");
    }
  }, [count]);

  // Unmount
  useEffect(() => {
    return () => {
      console.log("❌ Unmounted (componentWillUnmount)");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Lifecycle with Hooks</h1>
      <p>Open the console to see lifecycle logs 👇</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
