import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Topics } from "./Topics";
import { Moods } from "./Moods";
import profilepic from "../img/profilepic.png"
import '../components/profile.css'

export function ProfilePage(props) {
  const [selectedInterestTopics, setSelectedInterestTopics] = useState([]);
  const [selectedDisinterestTopics, setSelectedDisinterestTopics] = useState([]);
  const [privateAccount, setPrivateAccount] = useState(false);

  const handleToggle = () => {
    setPrivateAccount(!privateAccount);
  };
  const emojiOptions = [
    { label: '😄', value: 'happy' },
    { label: '😊', value: 'smiling' },
    { label: '😐', value: 'neutral' },
    { label: '😔', value: 'sad' },
    { label: '😢', value: 'crying' }
  ];

  const [selectedFeeling, setSelectedFeeling] = useState('');

  const handleFeelingClick = (value) => {
    setSelectedFeeling(value);
  };


  return (
    <div>
      <NavBar />
      <div className="profile-container">
        <div className="row">
          <div className="col-6">
            <div className="profile-left">
            <h1 className="profile-heading" style={{marginTop: '150px'}}>Overview</h1>
            <span className="subtext">Welcome back, Jessica! Your progress is really great so far. Keep it up!</span>
            <section>
              <h2 style={{marginTop: '16px'}}>Your Quiz Stats</h2>
              <div>
                <p className="quiz-stats">67% AVERAGE SCORE higher than 84% of users! Nice Job!</p>
              </div>
              <h2 style={{marginTop: '36px'}}>Your Reflections Stats</h2>
              <Link to={"/reflection"}>
              <button className="button">Edit or view posts</button>
              </Link>
            </section>
            <section>
              <h2 style={{marginTop: '36px'}}>Topics of Interest</h2>
              <Topics
                setSelectedTopics={setSelectedInterestTopics}
                selectedTopics={selectedInterestTopics}
                isInterest={true} />
              <h2 style={{marginTop: '36px'}}>Topics of Disinterest</h2>
              <Topics setSelectedTopics={setSelectedDisinterestTopics}
                selectedTopics={selectedDisinterestTopics}
                isInterest={false} />
            </section>
            <section>
            <h3 style={{ marginTop: '36px' }}>How are you feeling?</h3>
            <div className="emoji-options">
            {emojiOptions.map((option) => (
            <span
            style={{fontSize: '40px', padding: '0.5rem'}}
              key={option.value}
              className={`emoji ${selectedFeeling === option.value ? 'selected' : ''}`}
              onClick={() => handleFeelingClick(option.value)}
             >
            {option.label}
          </span>
        ))}
      </div>
      <button className="button" style={{marginTop: '5px'}}>View tracker</button>
              <h3 style={{marginTop: '36px'}}>What has affected your mood most recently?</h3>
              <Moods />
            </section>
          </div>
          </div>
          <div className="col-6">
            <div className="profile-right" style={{backgroundColor: 'rgba(243, 158, 158, 0.1)', height: '1000px', width: '300px'}}>
              <div className="profile-picture" style={{marginTop: '150px'}}>
                <img src={profilepic} style={{width: '200px', height: '200px'}}/>
              </div>
              <div className="profile-settings">
                <h2 className="profile-name">Jessica Hoang</h2>
                <label htmlFor="privateAccountToggle" style={{marginRight: '60px'}}>Private Account</label>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="privateAccountToggle"
                    checked={privateAccount}
                    onChange={handleToggle}
                  />
                  <label className="label" htmlFor="privateAccountToggle">
                    <span className="inner" />
                    <span className="switch" />
                  </label>
                </div>
                <p style={{marginTop: '10px', fontSize: '13px'}}>By selecting this, your discussion posts and comments will automatically be anonymous.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
