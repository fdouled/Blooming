import React from "react";
import { NavBar } from "./NavBar";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from 'firebase/database';
import "../components/learn.css";


const modules = [
  {
    title: "Menstrual Cycle",
    desc: "This module is a comprehensive overview of the menstrual cycle.",
    image: '../img/module1image.jpg'
  },
  {
    title: "Contraception",
    desc: "This module is a comprehensive overview of contraceptive methods.",
    image: '../img/module2image.jpg'
  },
  {
    title: "Sexually Transmitted Infections/Diseases (STIs and STDs)",
    desc: "This module is a comprehensive overview of the sexually transmitted infections (STIs/STDs).",
    image: '../img/module3image.jpg'
  }
];

export function LearnPage(props) {
  // Import modules data from firebase
  const [modulesData, setModulesData] = useState([]);
  const db = getDatabase();
  const modulesRef = ref(db, 'modules');

  // Convert the data into an array structure
  useEffect(() => {
    const newModules = onValue(modulesRef, (snapshot) => {
      const allModuleObj = snapshot.val();
      const allModuleKeys = Object.keys(allModuleObj);

      const allModulesArray = allModuleKeys.map((key) => {
        const singleModuleCopy = {...allModuleObj[key]};
        singleModuleCopy.key = key;
        return singleModuleCopy;
      });

      console.log(allModulesArray);
      setModulesData(allModulesArray);
    });

    function cleanup() {
      console.log("Component is being removed");
      console.log("turn out the lights");
      newModules();
    }

    return cleanup;
  }, []);

  // Create a card for each module in the array
  const moduleCards = modulesData.map((module) => {
    return <Card module={module} key={module.key} />;
  });

  // Render the Learn Page
  return (
    <div>
      <NavBar/>
      <header className="container learn-page-header">
        <h1 className="learn-with-blooming">Learn with Blooming!</h1>
        <p className="start-education">Start our educational modules today!</p>
      </header>
      <section className="all-modules">
        <h2 className="learning-mods">LEARNING MODULES</h2>
        <div>{moduleCards}</div>
      </section>
    </div>
  );
}
