import React from "react";
import { NavBar } from "./NavBar";
import { Topics } from "./Topics";
import { Moods } from "./Moods";

export function ProfilePage(props) {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <section>
          <h1 className="profile-heading">Overview</h1>
          <span className="subtext">Welcome back, Jessica! Your progress is really great so far. Keep it up!</span>
        </section>
        <section>
          <h2>Your Quiz Stats</h2>
          <div>

            <p>67% AVERAGE SCORE higher than 84% of users</p>
          </div>
          <h2>Your Reflections Stats</h2>
          <button className="profile-button">Edit or view posts</button>
        </section>
        <section>
          <h2>Topics of Interest</h2>
          <Topics/>
          <h2>Topics of Disinterest</h2>
          <Topics/>
        </section>
        <section>
          <h3>How are you feeling?</h3>
          <button className="profile-button">View tracker</button>
          <h3>What has affected your mood most recently?</h3>
          <Moods/>
        </section>
      </div>
      <div>

      </div>
    </div>
  );
}