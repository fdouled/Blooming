import React from "react";
import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { getDatabase, onValue, ref } from 'firebase/database';
import "../components/moduleLesson.css";

export function ModuleLesson(props) {
  const location = useLocation();
  const module = location.state;
  const pages = module.pages;

  const [currentPage, setCurrentPage] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const {section, subsections} = pages[currentPage];

  const [quizData, setQuizData] = useState([]);
  const db = getDatabase();
  const quizRef = ref(db, 'quizzes');

  useEffect(() => {
    const newQuizzes = onValue(quizRef, (snapshot) => {
      const allQuizObj = snapshot.val();
      const allQuizKeys = Object.keys(allQuizObj);

      const allQuizzesArray = (allQuizKeys.map((key) => {
          const singleQuizCopy = {...allQuizObj[key]}; //copy element at that key
          singleQuizCopy.key = key; //save the key string as an "id" for later
          return singleQuizCopy; //the transformed object to store in the array
      }));

      console.log(allQuizzesArray);
      setQuizData(allQuizzesArray);
    });

    function cleanup() {
        console.log("Component is being removed");
        console.log("turn out the lights");
        newQuizzes();
      }
      return cleanup;
  }, []);

  let quiz = {};
  quizData.forEach(element => {
    if(element.title === module.title) {
      quiz = element;
    }
  });

  const nextClick = () => {
    if (currentPage !== pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
      setShowResult(true);
    }
  }

  const prevClick = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1 className="module-title">{module.title}</h1>
        {!showResult ? (
        <div>
          <h2 className="section-title">{section}</h2>
          {subsections.map((subsection) => {
            console.log(subsection.paragraph);
            if(Array.isArray(subsection.paragraph)) {
              return (
                <div>
                  <h3 className="section-bullets">{subsection.subsection}</h3>
                  <p>
                    <ul className="bullet-content">
                      {subsection.paragraph.map((listitem) => {
                        return (
                          <li>{listitem}</li>
                        )
                      })}
                    </ul>
                  </p>
                </div>
              )
            } else {
              return (
                <div>
                  <h3  className="section-title">{subsection.subsection}</h3>
                  <p className="section-content">{subsection.paragraph}</p>
                </div>
              )
            }
        })}
        <div className="footer">
          <button onClick={prevClick} disabled={currentPage === 0} className="second-btn2">Previous</button>
          <button onClick={nextClick} className="button">
            {currentPage === pages.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>) :
      <div id="results">
        <h3 className="congrats">CONGRATS!</h3>
        <p className="completed">You've completed the {module.title} module!</p>
        <p className="would-like">If you would like to take the {module.title} quiz, click on Take Quiz!</p>
        <p className="explore-others">Or explore our other modules!</p>
        <div className="footer">
          <Link to={'/module-quiz'} state={quiz}><button className="button">Take Quiz</button></Link>
          <a href="/learn" className="second-btn" id="back-button">Back to Modules</a>
        </div>
      </div>}
    </div>
  </div>
  )
}