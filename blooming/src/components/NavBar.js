import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/blooming-logo.png';
import "../components/nav.css";

export function NavBar(props) {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0); 
      setPrevScrollY(currentScrollY);
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={`header ${isScrolled ? 'scroll-down' : ''}`}>
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link className="nav-logo" to="/dashboard">
            <img src={logo} alt="" width="100" height="100" />
          </Link>
          <Link className="brand" to="/dashboard">
            <span style={{ color: "#F39E9E" }}>B</span>
            <span style={{ color: "#f6b5b5" }}>L</span>
            <span style={{ color: "#F39E9E" }}>O</span>
            <span style={{ color: "#f6b5b5" }}>O</span>
            <span style={{ color: "#F39E9E" }}>M</span>
            <span style={{ color: "#f6b5b5" }}>I</span>
            <span style={{ color: "#F39E9E" }}>N</span>
            <span style={{ color: "#f6b5b5" }}>G</span>
          </Link>
          <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
            <NavItem to="/profile" label="PROFILE" onClick={handleClose} />
            <NavItem to="/dashboard" label="DASHBOARD" onClick={handleClose} />
            <NavItem to="/learn" label="LEARN" onClick={handleClose} />
            <NavItem to="/quiz" label="QUIZ" onClick={handleClose} />
            <NavItem to="/about" label="ABOUT" onClick={handleClose} />
            <NavItem to="/reflection" label="REFLECTION" onClick={handleClose} />
          </ul>
        </div>
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

const NavItem = ({ to, label, onClick }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to} onClick={onClick}>{label}</Link>
  </li>
);

export default NavBar;
