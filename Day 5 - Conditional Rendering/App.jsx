import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Conditional Rendering Demo</h1>

      {/* Ternary Example */}
      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      )}

      {/* Logical AND */}
      {hasError && <p style={{ color: "red" }}>Something went wrong!</p>}

      {/* Render nothing */}
      {showModal ? <p>This is a modal.</p> : null}

      {/* Toggle controls */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setHasError(!hasError)}>
          Toggle Error Message
        </button>
        <button onClick={() => setShowModal(!showModal)}>
          Toggle Modal
        </button>
        <button onClick={() => setLoading(true)}>Simulate Loading</button>
      </div>
    </div>
  );
}

export default App;
