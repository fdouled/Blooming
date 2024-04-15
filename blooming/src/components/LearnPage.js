import React from "react";
import { NavBar } from "./NavBar";
import { Card } from "./Card";

const modules = [{title: "Menstrual Cycle", desc: "description"},
{title: "Contraception", desc: "description"},
{title: "Sexually Transmitted Infections/Diseases (STIs and STDs)", desc: "description"}]

export function LearnPage(props) {
  const moduleCards = modules.map((module) => {
    return <Card module={module}/>
  })
  return (
    <div>
      <NavBar/>
      <header className="container learn-page-header">
        <h1 className="text-center">Learn with Blooming!</h1>
        <p className="subtext text-center">Start our educational modules today!</p>
      </header>
      <section className="container">
        <h2>Learning Modules</h2>
        <div>{moduleCards}</div>
      </section>
    </div>
  );
}