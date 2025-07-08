import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>LMS Portal</h1>
        <p>Empower your learning journey</p>
      </header>

      <main>
        <Link to="/login" className="home-button">Login</Link>
        <Link to="/register" className="home-button-outline">Register</Link>
      </main>
    </div>
  );
}

export default Home;
