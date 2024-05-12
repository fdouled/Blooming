import React from "react";
import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

export function ModuleLesson(props) {
  const location = useLocation();
  const module = location.state;
  const pages = module.pages;
  console.log(pages);

  const [currentPage, setCurrentPage] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const {section, subsections} = pages[currentPage];
  console.log(subsections);

  const nextClick = () => {
    if (currentPage !== pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(0);
      setShowResult(true);
    }
  }

  const prevClick = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>{module.title}</h1>
        <div>
        <h2>{section}</h2>
        {subsections.map((subsection, index) => {
        console.log(subsection.paragraph);
        if(Array.isArray(subsection.paragraph)) {
          return (
            <div>
              <h3>{subsection.subsection}</h3>
              <p>
                <ul>
                  {subsection.paragraph.map((listitem) => {
                    return (
                      <li>{listitem}</li>
                    )
                  })}
                </ul>
              </p>
            </div>
          )
        } else {
          return (
            <div>
              <h3>{subsection.subsection}</h3>
              <p>{subsection.paragraph}</p>
            </div>
          )
        }
        })}
        </div>
        <div className="footer">
            <button onClick={prevClick} disabled={currentPage === 0} className="second-btn2">Previous</button>
            <button onClick={nextClick} className="button">
              {currentPage === pages.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
      </div>
    </div>
  )
}

// <h2>{section}</h2>
//           {subsections.map((subsection, index) => {
//             console.log(subsection.paragraph);
//             if(subsection.paragraph.length > 1) {
//               return (
//                 <div>
//                   <h3>{subsection.subsection}</h3>
//                   <p>
//                     <ul>
//                       {subsection.paragraph.map((listitem) => {
//                         <li>{listitem}</li>
//                       })}
//                     </ul>
//                   </p>
//                 </div>
//               )
//             } else {
//               return (
//                 <div>
//                   <h3>{subsection.subsection}</h3>
//                   <p>{subsection.paragraph}</p>
//                 </div>
//               )
//             }
//             })}