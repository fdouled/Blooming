import React from "react";
import { NavBar } from "./NavBar";
import { QuizQuestion } from "./QuizQuestion";

const quiz = [{question: "Fill in the blanks: The menstrual cycle is a ___ and is controlled by many different __ and the hormones they produce",
answers: ["complex cycle; glands", "glands; complex cycle", "simple cycle; organs"], correct: 0},
{question: "What are the four phases of the menstrual cycle?",
answers: ["", "Menstruation, the follicular phase, ovulation, the luteal phase", ""], correct: 1},
{question: "Fill in the blanks: __ days is the average length of a menstrual cycle while __ is the average age for a first period",
answers: ["29  - 30 days, 14 - 16", "28 - 29 days, 12 - 13", "25 - 27 days, 11 - 13"], correct: 1}]

export function Quiz(props) {
  const questions = quiz.map((questionObj) => {
    return <QuizQuestion question={questionObj}/>
  })

  function submitQuiz(event) {
    document.getElementById("questions").classList.add("d-none");
    document.getElementById("results").classList.remove("d-none");
    document.getElementById("back-button").classList.remove("d-none");
  }

  return (
    <div>
      <NavBar/>
      <header>
        <h1 className="text-center">Module One: Menstrual Cycle</h1>
      </header>
      <div className="container">
        <div id="questions">
          {questions}
        </div>
        <div id="results" className="d-none">
          <p>Great work!</p>
          <p>You got __ out of __ questions correct!</p>
        </div>
        <button className="submit-button" onClick={submitQuiz}>Submit</button>
        <a href="/quiz" className="btn btn-secondary d-none" id="back-button">Go Back</a>
      </div>
    </div>
  );
}