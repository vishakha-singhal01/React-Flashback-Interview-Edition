import React, { useReducer } from "react";

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>useReducer Example</h1>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })} style={{ margin: "0.5rem" }}>
        ➕ Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })} style={{ margin: "0.5rem" }}>
        ➖ Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })} style={{ margin: "0.5rem" }}>
        🔄 Reset
      </button>
    </div>
  );
};

export default App;
