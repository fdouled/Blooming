import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/blooming-logo.png';

export function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/dashboard" style={{ fontSize: "32px" }}>
        <img src={logo} width="100" height="100" className="d-inline-block align-top" alt="" />
        <span style={{ color: "#F39E9E" }}>B</span>
        <span style={{ color: "#f6b5b5" }}>L</span>
        <span style={{ color: "#F39E9E" }}>O</span>
        <span style={{ color: "#f6b5b5" }}>O</span>
        <span style={{ color: "#F39E9E" }}>M</span>
        <span style={{ color: "#f6b5b5" }}>I</span>
        <span style={{ color: "#F39E9E" }}>N</span>
        <span style={{ color: "#f6b5b5" }}>G</span>
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")} id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/profile" style={{ fontSize: "24px", margin: "10px 0", color: "#F39E9E" }}>PROFILE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard" style={{ fontSize: "24px", margin: "10px 0", color: "#f6b5b5" }}>DASHBOARD</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/learn" style={{ fontSize: "24px", margin: "10px 0", color: "#F39E9E" }}>LEARN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quiz" style={{ fontSize: "24px", margin: "10px 0", color: "#f6b5b5" }}>QUIZ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ fontSize: "24px", margin: "10px 0", color: "#F39E9E" }}>ABOUT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
