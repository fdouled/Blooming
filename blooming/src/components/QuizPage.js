import React from "react";
import { NavBar } from "./NavBar";
import { Link } from 'react-router-dom';

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
  return (
    <div>
      <NavBar/>
      <header>
        <h1 className="text-center">Module Quizzes</h1>
        <p className="text-center subtext">Test your knowledge here!</p>
      </header>
      <div className="card w-75 container">
        <div className="card-body">
          <h5 className="card-title">Menstural Cycle</h5>
          <p className="card-text">This quiz will test you on your knowledge of your menstrual health, how to maintain hygiene and more.</p>
          <Link to={'/module-quiz'}>
            <button className="button">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}