import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                <a className="navbar-brand" href="#">
                    <img src={require("../img/blooming-logo.png")}  width="50" height="50" className="d-inline-block align-top" alt="" />
                    <span style={{ fontSize: '2rem', marginLeft: '0.5rem' }}>BLOOMING</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/learn">Learn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/quiz">Quiz</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
