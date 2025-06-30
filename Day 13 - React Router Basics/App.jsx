import React from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>📖 About Page</h2>;

const Profile = () => {
  const { username } = useParams();
  return <h2>👤 Profile: {username}</h2>;
};

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h1>React Router Basics</h1>

        {/* Navigation */}
        <nav style={{ margin: "1rem" }}>
          <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 1rem" }}>About</Link>
          <Link to="/profile/vishakha" style={{ margin: "0 1rem" }}>My Profile</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
