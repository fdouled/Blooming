import React from "react";
import { NavBar } from "./NavBar";
// import { Welcome } from './components/Welcome';
import { Topics } from "./Topics";
import next from '../img/chevron-right.svg'

export function DashboardPage(props) {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <section>
          <h1>Welcome Back, Jessica!</h1>
          <button className="dashButton">Navigate to your profile to log and view your mood tracker<img className="next" src={next} alt=""></img></button>
          {/* <img></img> */}
        </section>
        <section>
          <h2>Selected Topics of Interest</h2>
          <Topics/>
        </section>
        <section>
          <h2>Current Modules</h2>

          <h2>Modules to Explore</h2>
        </section>
        <section>
          <h2>Recommended Articles</h2>
        </section>
      </div>
    </div>
  );
}