import React from "react";
import { NavBar } from "./NavBar";
import { QuizQuestion } from "./QuizQuestion";

const quizzes = [{title: "Module One: Menstrual Cycle",
questions:["Fill in the blanks: The menstrual cycle is a ___ and is controlled by many different __ and the hormones they produce",
"What are the four phases of the menstrual cycle?",
"Fill in the blanks: __ days is the average length of a menstrual cycle while __ is the average age for a first period"]}]

export function Quiz(props) {
  console.log("rendered")
  return (
    <div>
      <NavBar/>
      <header>
        <h1 className="text-center">Module One: Menstrual Cycle</h1>
      </header>
      <div className="container">
        <QuizQuestion/>
      </div>
    </div>
  );
}