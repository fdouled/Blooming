import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/blooming-logo.png'

export function NavBar(props) {
  // const [displayLinks, setDisplay] = useState(null);

  return (
              <nav className="navbar navbar-expand-lg navbar-light navbar-color">
    <Link className="navbar-brand" to={"/"}>
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
        BLOOMING
      </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={"/profile"}>Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/dashboard"}>Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/learn"}>Learn</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/quiz"}>Quiz</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  </nav>
  );
}