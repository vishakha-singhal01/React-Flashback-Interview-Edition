import React from 'react';

// Reusable Button Component
const Button = ({ label }) => {
  return <button style={styles.button}>{label}</button>;
};

// Greeting Component
const Greeting = () => {
  return <h1 style={styles.heading}>👋 Hello, world! Welcome to React.</h1>;
};

// Main App Component
const App = () => {
  return (
    <div style={styles.container}>
      <Greeting />
      <p style={styles.text}>
        This is your first React component, built with JSX and function-based components.
      </p>
      <Button label="Click Me" />
    </div>
  );
};

// Simple Inline Styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#4B9CD3',
  },
  text: {
    fontSize: '1rem',
    margin: '1rem 0',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4B9CD3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default App;
