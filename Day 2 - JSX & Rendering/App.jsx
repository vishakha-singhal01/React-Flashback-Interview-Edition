import React from "react";

// A simple React component using JSX
function Welcome({ name }) {
  return <h2>Welcome back, {name}!</h2>;
}

function App() {
  const user = "React Developer";
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div style={{ textAlign: "center", padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hello, JSX!</h1>
      <p>Current time: {currentTime}</p>
      <Welcome name={user} />

      <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
        This is a simple example showing JSX + rendering in React.
      </p>
    </div>
  );
}

export default App;
