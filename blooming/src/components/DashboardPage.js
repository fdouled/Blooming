import React, {useState} from "react";
import { NavBar } from "./NavBar";
// import { Welcome } from './components/Welcome';
import { Topics } from "./Topics";
import { Link } from "react-router-dom";
import next from '../img/chevron-right.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileClipboard } from '@fortawesome/free-regular-svg-icons';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../components/dashboard.css';
import PopupNotice from '../components/PopUp.js';
import articles from './articles.json';


export function DashboardPage(props) {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <NavBar/>
      {showPopup && <PopupNotice onClose={handleClosePopup} />}
      <div className="container">
        <section>
          <h1>Welcome Back, Jessica!</h1>
          <Link to={"/profile"}>
            <button className="dashButton">Navigate to your profile to log and view your mood tracker<img className="next" src={next} alt=""></img></button>
          </Link>
        </section>
        <section>
          <h2>Selected Topics of Interest</h2>
          <Topics/>
        </section>
        {/* Topics of Interest Articles */}
        <section className="article-container">
          <div className="row">
            {articles.articles.map((article, index) => (
              <div key={index} className="column col-6">
                <div className="topics-article-tile">
                  <h3><a className="article-link" href={article.url} target="_blank">{article.title}</a></h3>
                  <p>Source: {article.source}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* End */}
        <section>
          <h2>Current Modules</h2>
            <div className="moduleTile">
              <div className="moduleInfo">
                <h3>Menstrual Health</h3>
                <span><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}} />7:20hr</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{marginRight: '5px'}} />20 Lessons</span>
              </div>
              <div style={{ width: 130, height: 130 }}>
                    <CircularProgressbarWithChildren value={20}>
                      <div style={{ textAlign: 'center', margin: 10, fontSize: 12}}>
                        <strong>Status</strong><br />
                          4 of 20<br />
                          Lessons Completed
                        </div>
                    </CircularProgressbarWithChildren>
              </div>
            </div>
          </section>
          <section>
            <h2>Modules to Explore</h2>
            <div className="moduleTile">
              <div className="moduleInfo">
                <h3>Reproductive System Disorders</h3>
                <span><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}} />3:50hr</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{marginRight: '5px'}} />16 Lessons</span>
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
                <span><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}} />3:00hr</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{marginRight: '5px'}} />8 Lessons</span>
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
                <h3>Contraception and Family Planning</h3>
                <i className="far fa-clock"></i>
                <span><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}} />4:00hr</span>
                <span className="space-between"></span>
                <span><FontAwesomeIcon icon={faFileClipboard} style={{marginRight: '5px'}}/>10 Lessons</span>
              </div>
              <div style={{ width: 130, height: 130 }}>
                <CircularProgressbarWithChildren value={20}>
                  <div style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    <strong>Status</strong><br />
                      2 of 10<br />
                      Lessons Completed
                    </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
          </section>
          <section>
            <h2>Recommended Articles</h2>
            <div class="article-container">
              <div class="row">
                <div class="column col-6">
                  <div class="article-tile">
                    <h3><a class="article-link" href="https://www.cdc.gov/hygiene/personal-hygiene/menstrual.html#:~:text=Practice%20Healthy%20Habits%20During%20Your,stay%20comfortable%20during%20your%20period.&text=Wash%20your%20hands%20before%20and,before%20using%20a%20menstrual%20product." target="_blank">
                    Menstrual Hygiene Management: Best Practices for Health and Comfort
                    </a></h3>
                    <p>Posted Yesterday</p>
                  </div>
                </div>
                <div class="column col-6">
                  <div class="article-tile">
                    <h3><a class="article-link" href="https://www.mayoclinic.org/diseases-conditions/menstrual-cramps/diagnosis-treatment/drc-20374944" target="_blank">
                      Managing Menstrual Pain: Effective Strategies and Relief Techniques</a></h3>
                    <p>Posted Last Week</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}