import React, { Suspense, lazy } from "react";

// Lazy loaded component
const LazyComponent = lazy(() => import("./LazyComponent"));

// Error Boundary class
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. 🚨</h2>;
    }

    return this.props.children;
  }
}

// Faulty Component for demo
const BuggyComponent = () => {
  throw new Error("Simulated render crash");
};

const App = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Error Boundaries & Suspense</h1>

      <ErrorBoundary>
        {/* This will throw an error */}
        {/* <BuggyComponent /> */}
        <Suspense fallback={<p>Loading lazy component...</p>}>
          <LazyComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
