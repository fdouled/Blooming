import React, {useState} from "react";
import { NavBar } from "./NavBar";
import { Topics } from "./Topics";
import { Link } from "react-router-dom";
import next from '../img/chevron-right-two.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileClipboard } from '@fortawesome/free-regular-svg-icons';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../components/dashboard.css';
import PopupNotice from '../components/PopUp.js';
import modules from './modules.json';
import articles from './articles.json';


export function DashboardPage(props) {
  const [showPopup, setShowPopup] = useState(true);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const filteredModules = modules.filter(module =>
    selectedTopics.some(topic => module.topics.includes(topic))
  );

  const filteredArticles = articles.articles.filter(article =>
    selectedTopics.includes(article.topic)
  );

  const recommendedArticles = articles.articles.filter(article =>
    selectedTopics.some(topic => article.topics.includes(topic))
  );


  return (
    <div>
      <NavBar/>
      {showPopup && <PopupNotice onClose={handleClosePopup} />}
      <div className="container">
        <section className="welcomeText">
          <div className="centered-content">
          <h1 style={{marginTop: '155px'}}>Welcome Back, Jessica!</h1>
          <Link to={"/profile"}>
            <button className="dashButton">Navigate to your profile to log and view your mood tracker<img className="next" src={next} alt=""></img></button>
          </Link>
          </div>
        </section>
        <section>
          <h2 className="headingOne">Selected Topics of Interest</h2>
          <Topics setSelectedTopics={setSelectedTopics} selectedTopics={selectedTopics} />
        </section>
        <section className="section-with-spacing">
            <h2 className="headingThree">Current Modules</h2>
            <div className="moduleTile">
              <div className="moduleInfo">
                <h3>Reproductive System Disorders</h3>
                <div className="moduleMisc">
                <span><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}} />3:50hr</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{marginRight: '5px'}} />16 Lessons</span>
                </div>
              </div>
              <div style={{ width: 130, height: 130}}>
                <CircularProgressbarWithChildren value={1/16}>
                  <div style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    <strong>Status</strong><br />
                      1 of 16<br />
                      Lessons Completed
                    </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className="moduleTile">
              <div className="moduleInfo">
                <h3>Sexual Health</h3>
                <div className="moduleMisc">
                <span><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}} />3:00hr</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{marginRight: '5px'}} />8 Lessons</span>
                </div>
              </div>
              <div style={{ width: 130, height: 130 }}>
                <CircularProgressbarWithChildren value={0/8}>
                  <div style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    <strong>Status</strong><br />
                      0 of 8<br />
                      Lessons Completed
                    </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className="moduleTile">
              <div className="moduleInfo">
                <h3>Cervical Health</h3>
                <div className="moduleMisc">
                <i className="far fa-clock"></i>
                <span><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}} />4:00hr</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{marginRight: '5px'}}/>12 Lessons</span>
                </div>
              </div>
              <div style={{ width: 130, height: 130 }}>
                <CircularProgressbarWithChildren value={20}>
                  <div style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    <strong>Status</strong><br />
                      3 of 12<br />
                      Lessons Completed
                    </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </section>
        <section className="section-with-spacing">
          <h2 className="headingTwo">Modules to Explore</h2>
          {filteredModules.map(module => (
            <div key={module.id} className="moduleTile">
              <div className="moduleInfo">
                <h3>{module.title}</h3>
                <span><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} />{module.duration}</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{ marginRight: '5px' }} />{module.lessons} Lessons</span>
              </div>
              <div style={{ width: 130, height: 130 }}>
                <CircularProgressbarWithChildren value={module.completedLessons / module.totalLessons}>
                  <div style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    <strong>Status</strong><br />
                    {module.completedLessons} of {module.totalLessons}<br />
                    Lessons Completed
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          ))}
        </section>
          {/* Recommended Articles section */}
          <section className="section-with-spacing">
            <h2 className="headingFour">Recommended Articles</h2>
            <div className="article-container">
              <div className="row">
                {recommendedArticles.map((article, index) => (
                  <div key={index} className="column col-6">
                    <div className="article-tile">
                      <h3>
                        <a
                          className="article-link"
                          href={article.url}
                          target="_blank"
                        >
                          {article.title}
                        </a>
                      </h3>
                      <p>Posted by: {article.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>
        </div>
      </div>
  );
}