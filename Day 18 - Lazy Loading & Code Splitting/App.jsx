import React, { Suspense, useState } from "react";

// Lazy loaded component
const LazyGreeting = React.lazy(() => import("./LazyGreeting"));

const App = () => {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Lazy Loading & Code Splitting</h1>
      <button onClick={() => setShowLazy(true)}>
        Load Lazy Component
      </button>

      {showLazy && (
        <Suspense fallback={<p>Loading component...</p>}>
          <LazyGreeting />
        </Suspense>
      )}
    </div>
  );
};

export default App;
