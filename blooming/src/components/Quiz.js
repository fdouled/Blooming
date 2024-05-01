import React from "react";
import { NavBar } from "./NavBar";
import { QuizQuestion } from "./QuizQuestion";
import { useState } from "react";

const quiz = [{question: "Fill in the blanks: The menstrual cycle is a ___ and is controlled by many different __ and the hormones they produce",
answers: ["Complex cycle; glands", "Glands; complex cycle", "Simple cycle; organs"], correct: "Complex cycle; glands"},
{question: "What are the four phases of the menstrual cycle?",
answers: ["The preparation phase, the release phase, the luteal phase, the shedding phase", "Menstruation, the follicular phase, ovulation, the luteal phase",
"The quiet phase, ovulation, the maintenence phase, the reset phase"], correct: "Menstruation, the follicular phase, ovulation, the luteal phase"},
{question: "Fill in the blanks: __ days is the average length of a menstrual cycle while __ is the average age for a first period",
answers: ["29  - 30 days, 14 - 16", "28 - 29 days, 12 - 13", "25 - 27 days, 11 - 13"], correct: "28 - 29 days, 12 - 13"},
{question: "What happens during menstruation?",
answers: ["Your uterus lining sheds and flows out of your vagina.", "Your ovary releases an egg into the falopian tube.", "The body expels excess iron from the bloodstream through vaginal bleeding."],
correct: "Your uterus lining sheds and flows out of your vagina."},
{question: "What is ovulation?",
answers: ["When a mature egg is released from an ovary and moves along a fallopian tube towards your uterus.",
"A phase in the menstrual cycle when the uterus contracts to expel any remaining menstrual blood and prepare for the next cycle.",
"The hormonal surge that prompts the uterus to thicken its lining, making it ready for implantation of a fertilized egg."],
correct: "When a mature egg is released from an ovary and moves along a fallopian tube towards your uterus."},
{question: "Which of these is not a side effect of premenstrual syndrome (PMS)?",
answers: ["Mood swings", "Acne", "Sore throat"], correct: "Sore throat"},
{question: "Which of the following is a sign to see your doctor about your menstrual cycle?",
answers: ["You have cravings for certain foods.",
"You feel more sensitive to pain, such as experiencing heightened sensitivity to touch or temperature changes.",
"You bleed between periods."], correct: "You bleed between periods."},
{question: "What menstrual hygiene products require insertion?",
answers: ["Pads", "Tampons", "Period underwear"], correct: "Tampons"},
{question: "Fill in the blank: You must change tampons every __ to __ hours",
answers: ["4 - 8 hours", "12 - 14 hours", "2 - 3 hours"], correct: "4 - 8 hours"},
{question: "How should you discard used disposable menstrual products?",
answers: ["Wrap them with toilet paper, a tissue, or other material and then toss in a trash bin.",
 "Dispose of them in recycling bins.",
 "Flush them down the toilet."], correct: "Wrap them with toilet paper, a tissue, or other material and then toss in a trash bin."},
{question: "True or false: Your menstrual cycle affects your ability to exercise",
answers: ["True", "False"], correct: "True"},
{question: "Define premenstrual syndrome (PMS)",
answers: ["PMS is a hormonal disorder characterized by the absence of mood swings, irritability, and physical discomfort in the days leading up to menstruation.",
"PMS is a combination of physical and emotional symptoms that many women get after ovulation and before the start of their menstrual period.",
"PMS is a condition where individuals experience decreased appetite and weight loss prior to their menstrual period."],
correct: "PMS is a combination of physical and emotional symptoms that many women get after ovulation and before the start of their menstrual period."},
{question: "Which of these is not an over-the-counter medicine that helps with PMS symptoms?",
answers: ["Ibuprofen", "Aspirin", "Hormonal"], correct: "Hormonal"}]

export function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState();

  const {question, answers, correct} = quiz[currentQuestion];

  function answerClick(answer, index) {
    setAnswerIdx(index);
    if (answer === correct) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }

  function nextClick() {
    setAnswerIdx(null);

  }

  function submitQuiz(event) {
    document.getElementById("questions").classList.add("d-none");
    document.getElementById("results").classList.remove("d-none");
    document.getElementById("back-button").classList.remove("d-none");
    document.getElementById("submit-button").classList.add("d-none");
    document.getElementById("retry-button").classList.remove("d-none");
  }

  return (
    <div>
      <NavBar/>
      <header>
        <h1 className="text-center">Menstrual Cycle</h1>
      </header>
      <hr/>
      <div className="container">
        <h3 className="text-center">
          <span className="current-question">{currentQuestion + 1}</span> out of <span className="total-questions">{quiz.length}</span>
        </h3>
        <div id="question">
          <h2 className="text-center">{question}</h2>
          <ul>
            {answers.map((answer, index) => {
              return (
                <li onClick={answerClick} key={answer} className={answerIdx === index ? "selected-answer" : null}>
                  {answer}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="footer">
            <button onClick={nextClick} disabled={answerIdx}>
              Next
            </button>
        </div>
        <div id="results" className="d-none">
          <p>Great work!</p>
          <p>You got __ out of __ questions correct!</p>
        </div>
        <button className="button" id="submit-button" onClick={submitQuiz}>Submit</button>
        <button className="button d-none" id="retry-button">Retry</button>
        <a href="/quiz" className="btn btn-secondary d-none" id="back-button">Go Back</a>
      </div>
    </div>
  );
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { CSSTransitionGroup } from 'react-transition-group';
// import Question from '../components/Question';
// import QuestionCount from '../components/QuestionCount';
// import AnswerOption from '../components/AnswerOption';

// function Quiz(props) {
//   function renderAnswerOptions(key) {
//     return (
//       <AnswerOption
//         key={key.content}
//         answerContent={key.content}
//         answerType={key.type}
//         answer={props.answer}
//         questionId={props.questionId}
//         onAnswerSelected={props.onAnswerSelected}
//       />
//     );
//   }

//   return (
//     <CSSTransitionGroup
//       className="container"
//       component="div"
//       transitionName="fade"
//       transitionEnterTimeout={800}
//       transitionLeaveTimeout={500}
//       transitionAppear
//       transitionAppearTimeout={500}
//     >
//       <div key={props.questionId}>
//         <QuestionCount counter={props.questionId} total={props.questionTotal} />
//         <Question content={props.question} />
//         <ul className="answerOptions">
//           {props.answerOptions.map(renderAnswerOptions)}
//         </ul>
//       </div>
//     </CSSTransitionGroup>
//   );
// }

// Quiz.propTypes = {
//   answer: PropTypes.string.isRequired,
//   answerOptions: PropTypes.array.isRequired,
//   question: PropTypes.string.isRequired,
//   questionId: PropTypes.number.isRequired,
//   questionTotal: PropTypes.number.isRequired,
//   onAnswerSelected: PropTypes.func.isRequired
// };

// export default Quiz;