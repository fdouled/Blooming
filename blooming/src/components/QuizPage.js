import React from "react";
import { NavBar } from "./NavBar";
import { Link } from 'react-router-dom';

// const quizzes = [{title: "Module One: Menstrual Cycle",
// questions:["Fill in the blanks: The menstrual cycle is a ___ and is controlled by many different __ and the hormones they produce",
// "What are the four phases of the menstrual cycle?",
// "Fill in the blanks: __ days is the average length of a menstrual cycle while __ is the average age for a first period"]}]

export function QuizPage(props) {
  console.log("rendered")
  return (
    <div>
      <NavBar/>
      <header>
        <h1 className="text-center">Module Quizzes</h1>
        <p className="text-center subtext">Test your knowledge here!</p>
      </header>
      <div className="card w-75 container">
        <div className="card-body">
          <h5 className="card-title">Module One: Menstural Cycle</h5>
          <p className="card-text">This quiz will test you on your knowledge of your menstrual health, how to maintain hygiene and more.</p>
          <Link to={'/module-quiz'}>
            <button className="button">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}