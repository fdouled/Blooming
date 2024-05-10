import React from "react";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import "../components/quiz.css";

// const quiz = [{question: "Fill in the blanks: The menstrual cycle is a _ and is controlled by many different _ and the hormones they produce",
// answers: ["Complex cycle; glands", "Glands; complex cycle", "Simple cycle; organs"], correct: "Complex cycle; glands"},
// {question: "What are the four phases of the menstrual cycle?",
// answers: ["The preparation phase, the release phase, the luteal phase, the shedding phase", "Menstruation, the follicular phase, ovulation, the luteal phase",
// "The quiet phase, ovulation, the maintenance phase, the reset phase"], correct: "Menstruation, the follicular phase, ovulation, the luteal phase"},
// {question: "Fill in the blanks: _ days is the average length of a menstrual cycle while _ is the average age for a first period",
// answers: ["29  - 30 days, 14 - 16", "28 - 29 days, 12 - 13", "25 - 27 days, 11 - 13"], correct: "28 - 29 days, 12 - 13"},
// {question: "What happens during menstruation?",
// answers: ["Your uterus lining sheds and flows out of your vagina.", "Your ovary releases an egg into the falopian tube.", "The body expels excess iron from the bloodstream through vaginal bleeding."],
// correct: "Your uterus lining sheds and flows out of your vagina."},
// {question: "What is ovulation?",
// answers: ["When a mature egg is released from an ovary and moves along a fallopian tube towards your uterus.",
// "A phase in the menstrual cycle when the uterus contracts to expel any remaining menstrual blood and prepare for the next cycle.",
// "The hormonal surge that prompts the uterus to thicken its lining, making it ready for implantation of a fertilized egg."],
// correct: "When a mature egg is released from an ovary and moves along a fallopian tube towards your uterus."},
// {question: "Which of these is not a side effect of premenstrual syndrome (PMS)?",
// answers: ["Mood swings", "Acne", "Sore throat"], correct: "Sore throat"},
// {question: "Which of the following is a sign to see your doctor about your menstrual cycle?",
// answers: ["You have cravings for certain foods.",
// "You feel more sensitive to pain, such as experiencing heightened sensitivity to touch or temperature changes.",
// "You bleed between periods."], correct: "You bleed between periods."},
// {question: "What menstrual hygiene products require insertion?",
// answers: ["Pads", "Tampons", "Period underwear"], correct: "Tampons"},
// {question: "Fill in the blank: You must change tampons every _ to _ hours",
// answers: ["4 - 8 hours", "12 - 14 hours", "2 - 3 hours"], correct: "4 - 8 hours"},
// {question: "How should you discard used disposable menstrual products?",
// answers: ["Wrap them with toilet paper, a tissue, or other material and then toss in a trash bin.",
//  "Dispose of them in recycling bins.",
//  "Flush them down the toilet."], correct: "Wrap them with toilet paper, a tissue, or other material and then toss in a trash bin."},
// {question: "True or false: Your menstrual cycle affects your ability to exercise",
// answers: ["True", "False"], correct: "True"},
// {question: "Define premenstrual syndrome (PMS)",
// answers: ["PMS is a hormonal disorder characterized by the absence of mood swings, irritability, and physical discomfort in the days leading up to menstruation.",
// "PMS is a combination of physical and emotional symptoms that many women get after ovulation and before the start of their menstrual period.",
// "PMS is a condition where individuals experience decreased appetite and weight loss prior to their menstrual period."],
// correct: "PMS is a combination of physical and emotional symptoms that many women get after ovulation and before the start of their menstrual period."},
// {question: "Which of these is not an over-the-counter medicine that helps with PMS symptoms?",
// answers: ["Ibuprofen", "Aspirin", "Hormonal"], correct: "Hormonal"}];

const resultInitState = {
  correctAnswers: 0,
  wrongAnswers: 0
};

export function Quiz(props) {
  const location = useLocation();
  const questions = location.state;
  console.log(questions.length);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitState);
  const [showResult, setShowResult] = useState(false);

  const {question, answers, correct} = questions[currentQuestion];

  // Applies styling when clicking on an answer choice
  // and checks whether or not the selected answer is correct
  const answerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correct) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  // This function takes care of updating the state of the quiz after clicking the next button
  // Updates the current score and question number incrementing it by one
  const nextClick = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
       ? {
          ...prev,
          correctAnswers: prev.correctAnswers + 1
       } : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1
       }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  }

  // This function takes care of updating the state of the quiz after clicking the previous button
  // Updates the current score and question number decrementing it by one
  const prevClick = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
       ? {
          ...prev,
          correctAnswers: prev.correctAnswers - 1
       } : {
          ...prev,
          wrongAnswers: prev.wrongAnswers - 1
       }
    );

    if (currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  const retryClick = () => {
    setResult(resultInitState);
    setShowResult(false);
  }

  return (
    <div>
      <NavBar/>
      <header>
        <h1 className="module-topic">Menstrual Cycle</h1>
      </header>
      <hr style={{ color: "#ffdd88" }}/>
      <div className="container">
        {/*Shows the question or result div depending on the status of the quiz*/
        !showResult ? (<div id="question">
          <h4 className="question-tracking">
            <span className="current-question">{currentQuestion + 1}</span> out of <span className="total-questions">{questions.length}</span>
          </h4>
          <h2 className="quiz-question">{question}</h2>
          <ul className="answer-choices">
            {answers.map((answer, index) => {
              return (
                // Renders each of the answer choices for the current question
                <li onClick={()=>answerClick(answer, index)} key={answer} className={answerIdx === index ? "selected-answer" : null}>
                  {answer}
                </li>
              )
            })}
          </ul>
          <div className="footer">
            <button onClick={prevClick} disabled={currentQuestion === 0} className="second-btn2">Previous</button>
            <button onClick={nextClick} disabled={answerIdx === null} className="button">
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>) :
        <div id="results">
          <h3>Results</h3>
          <p>Great work!</p>
          <p>You got {result.correctAnswers} out of {questions.length} questions correct!</p>
          <div className="footer">
            <button className="button" id="retry-button" onClick={retryClick}>Retry</button>
            <a href="/quiz" className="second-btn" id="back-button">Go Back</a>
          </div>
        </div>}
      </div>
    </div>
  );
}