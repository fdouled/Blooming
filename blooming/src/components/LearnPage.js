import React from "react";
import { NavBar } from "./NavBar";
import { Card } from "./Card";
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref } from 'firebase/database';
import "../components/learn.css";
import image1 from  "../img/module1image.jpg";
import image2 from  "../img/contraceptionmethods.jpg";
import image3 from  "../img/module3image.jpg";

const modules = [{title: "Menstrual Cycle", desc: "This module is a comprehensive overview of the menstrual cycle.", image: image1},
{title: "Contraception", desc: "This module is a comprehensive overview of contraceptive methods.", image: image2},
{title: "Sexually Transmitted Infections/Diseases (STIs and STDs)", desc: "This module is a comprehensive overview of the sexually transmitted infections (STIs/STDs).", image: image3}]

export function LearnPage(props) {
  const [modulesData, setModulesData] = useState([]);
  const db = getDatabase();
  const modulesRef = ref(db, 'modules');

  useEffect(() => {
    const newModules = onValue(modulesRef, (snapshot) => {
      const allModuleObj = snapshot.val();
      const allModuleKeys = Object.keys(allModuleObj);

      const allModulesArray = (allModuleKeys.map((key) => {
          const singleModuleCopy = {...allModuleObj[key]}; //copy element at that key
          singleModuleCopy.key = key; //save the key string as an "id" for later
          return singleModuleCopy; //the transformed object to store in the array
      }));

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
  console.log(modulesData);
  const moduleCards = modulesData.map((module) => {
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