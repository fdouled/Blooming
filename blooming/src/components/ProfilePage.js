import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { Topics } from "./Topics";
import { Moods } from "./Moods";

export function ProfilePage(props) {
  const [selectedTopics, setSelectedTopics] = useState([]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="profile-heading" style={{marginTop: '150px'}}>Overview</h1>
            <span className="subtext">Welcome back, Jessica! Your progress is really great so far. Keep it up!</span>
            <section>
              <h2>Your Quiz Stats</h2>
              <div>
                <p>67% AVERAGE SCORE higher than 84% of users</p>
              </div>
              <h2>Your Reflections Stats</h2>
              <button className="button">Edit or view posts</button>
            </section>
            <section>
              <h2>Topics of Interest</h2>
              <Topics selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
              <h2>Topics of Disinterest</h2>
              <Topics selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} />
            </section>
            <section>
              <h3>How are you feeling?</h3>
              <button className="button">View tracker</button>
              <h3>What has affected your mood most recently?</h3>
              <Moods />
            </section>
          </div>
          <div className="col-md-4">
            <div className="profile-picture" style={{marginTop: '150px'}}>
              <img src="profilepic.png" />
            </div>
            <div className="profile-settings">
              <h2>Profile Settings</h2>
              <p>46 posts</p>
              <p>Private Account</p>
              <button>Edit</button>
              <p>By selecting this you will have your discussion post’s and comment will automatically be anonymous</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
