import React from "react";

const quizzes = [{question: "Fill in the blanks: The menstrual cycle is a ___ and is controlled by many different __ and the hormones they produce",
answers: ["complex cycle; glands", "glands; complex cycle"]}]

export function QuizQuestion(props) {
  const questionObj = props.question;
  return (
    <div>
        <p>{questionObj.question}</p>
        <div>
          <input type="radio" name={questionObj.questionId} value={questionObj.answers[0]}/>
          <label for={questionObj.answers[0]}>{questionObj.answers[0]}</label>
        </div>
        <div>
          <input type="radio" name={questionObj.questionId} value={questionObj.answers[1]}/>
          <label for={questionObj.answers[1]}>{questionObj.answers[1]}</label>
        </div>
        <div>
          <input type="radio" name={questionObj.questionId} value={questionObj.answers[2]}/>
          <label for={questionObj.answers[2]}>{questionObj.answers[2]}</label>
        </div>
    </div>
  );
}