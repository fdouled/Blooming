import React from "react";
import { NavBar } from "./NavBar";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from 'firebase/database';

// const quiz1 = [{questionId: "0", question: "Fill in the blanks: The menstrual cycle is a ___ and is controlled by many different __ and the hormones they produce",
// answers: ["Complex cycle; glands", "Glands; complex cycle", "Simple cycle; organs"], correct: 0},
// {questionId: "1", question: "What are the four phases of the menstrual cycle?",
// answers: ["The preparation phase, the release phase, the luteal phase, the shedding phase", "Menstruation, the follicular phase, ovulation, the luteal phase",
// "The quiet phase, ovulation, the maintenence phase, the reset phase"], correct: 1},
// {questionId: "2", question: "Fill in the blanks: __ days is the average length of a menstrual cycle while __ is the average age for a first period",
// answers: ["29  - 30 days, 14 - 16", "28 - 29 days, 12 - 13", "25 - 27 days, 11 - 13"], correct: 1},
// {questionId: "3", question: "What happens during menstruation?",
// answers: ["Your uterus lining sheds and flows out of your vagina.", "Your ovary releases an egg into the falopian tube.", "The body expels excess iron from the bloodstream through vaginal bleeding."], correct: 1},
// {questionId: "4", question: "What is ovulation?",
// answers: ["When a mature egg is released from an ovary and moves along a fallopian tube towards your uterus.",
// "A phase in the menstrual cycle when the uterus contracts to expel any remaining menstrual blood and prepare for the next cycle.",
// "The hormonal surge that prompts the uterus to thicken its lining, making it ready for implantation of a fertilized egg."], correct: 1},
// {questionId: "5", question: "Which of these is not a side effect of premenstrual syndrome (PMS)?",
// answers: ["Mood swings", "Acne", "Sore throat"], correct: 2},
// {questionId: "6", question: "Which of the following is a sign to see your doctor about your menstrual cycle?",
// answers: ["You have cravings for certain foods.",
// "You feel more sensitive to pain, such as experiencing heightened sensitivity to touch or temperature changes.",
// "You bleed between periods."], correct: 2},
// {questionId: "7", question: "What menstrual hygiene products require insertion?",
// answers: ["Pads", "Menstrual cup, tampons", "Period underwear"], correct: 1},
// {questionId: "8", question: "Fill in the blank: You must change tampons every __ to __ hours",
// answers: ["4 - 8 hours", "12 - 14 hours", "2 - 3 hours"], correct: 0},
// {questionId: "9", question: "How should you discard used disposable menstrual products?",
// answers: ["Wrap them with toilet paper, a tissue, or other material and then toss in a trash bin.",
//  "Dispose of them in public recycling bins to reduce waste in landfills.",
//  "Wrap them with toilet paper, a tissue, or other material and then flush them down the toilet."], correct: 1},
// {questionId: "10", question: "True or false: Your menstrual cycle affects your ability to exercise",
// answers: ["True", "False", "Neither true nor false. It depends on the person"], correct: 1},
// {questionId: "11", question: "Define premenstrual syndrome (PMS)",
// answers: ["PMS is a hormonal disorder characterized by the absence of mood swings, irritability, and physical discomfort in the days leading up to menstruation.",
// "PMS is a combination of physical and emotional symptoms that many women get after ovulation and before the start of their menstrual period.",
// "Premenstrual syndrome is a condition where individuals experience decreased appetite and weight loss prior to their menstrual period."], correct: 1},
// {questionId: "12", question: "Which of these is not an over-the-counter medicine that helps with PMS symptoms?",
// answers: ["Ibuprofen", "Aspirin", "Hormonal"], correct: 1}]

export function QuizPage(props) {
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

  // console.log(quizData[0]);
  return (
    <div>
      <NavBar/>
      <header>
        <h1 className="module-quizzes">Module Quizzes</h1>
        <p className="test-yourself">Test your knowledge here!</p>
      </header>
        {quizData.map((quiz) => {
          // console.log(quiz)
          return (
            <div className="card w-75 container" style={{backgroundColor: "#faf6ea", border: "1px solid #e9e2cf", marginBottom: "10px"}}>
              <div className="card-body">
                <h5 className="quiz-title">{quiz.title}</h5>
                <p className="card-text">{quiz.desc}</p>
                <Link to={'/module-quiz'} state={quiz.questions}>
                  <button className="button-starting">Start</button>
                </Link>
              </div>
            </div>
          )
        })}
    </div>
  );
}