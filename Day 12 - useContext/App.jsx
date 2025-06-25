import React, { useContext, useState, createContext } from "react";

// Step 1: Create a context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user] = useState({ name: "Vishakha", role: "Developer" });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const Welcome = () => {
  // Step 2: Consume the context using useContext
  const user = useContext(UserContext);
  return <h2>Welcome, {user.name} 👋</h2>;
};

const Role = () => {
  const user = useContext(UserContext);
  return <p>Your role is: {user.role}</p>;
};

const App = () => {
  return (
    <UserProvider>
      <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
        <h1>useContext Example</h1>
        <Welcome />
        <Role />
      </div>
    </UserProvider>
  );
};

export default App;
