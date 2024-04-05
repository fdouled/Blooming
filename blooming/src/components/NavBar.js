import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export function NavBar(props) {
  // const [displayLinks, setDisplay] = useState(null);

  return (
    <header id="home-header">
            <div className="container">
              <h1>Cypher</h1>
              <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
              <nav>
              <ul>
                <li className="link"><Link to={"/"}>BLOOMING</Link></li>
                <li className="link"><Link to={"/dashboard"}>Dashboard</Link></li>
                <li className="link"><Link to={"/modules"}>Modules</Link></li>
                <li className="link"><Link to={"/quizzes"}>Quizzes</Link></li>
                <li className="link"><Link to={"/profile"}>Profile</Link></li>
                <li className="link"><Link to={"/about"}>About</Link></li>
              </ul>
              </nav>
            </div>
          </header>
  );
}