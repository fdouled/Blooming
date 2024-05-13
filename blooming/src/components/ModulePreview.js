import React from "react";
import { NavBar } from "./NavBar";
import { Link, useLocation } from 'react-router-dom';
import next from '../img/chevron-right.svg';
import "../components/modulePreview.css";

export function ModulePreview(props) {
  const location = useLocation();
  const module = location.state;

  return (
    <div>
      <NavBar />
      <div className="container">
        <h1 className="preview-title">{module.title}</h1>
        <p className="mod-description">{module.desc}</p>
        <p className="mod-contains">This module contains <span style={{ color: '#c1566a' }}>{module.pages.length}</span> parts.</p>
        <p className="resource-intro">
          The information contained in this module comes from these websites:
          <ul style={{ listStyle: 'none' }}>
            {module.links.map((resource, index) => (
              <li key={index} className="resource-list">
                <a href={resource.url} className="resource-link">{resource.name}</a>
              </li>
            ))}
          </ul>
          Visit these resources to learn more about this topic!
        </p>
        <Link to={'/learn'}>
          <button className="button-back">Go Back</button>
        </Link>
        <Link to={'/module-lesson'} state={module}>
          <button className="button-preview">Start</button>
        </Link>
        <h2 className="share-thoughts">Share Your Thoughts!</h2>
        <p className="lets-talk">Talk about your own experiences here! Let's build a community where we can become comfortable talking about these topics!</p>
        <div className="reflection">
          {module.reflections.map((reflection, index) => (
            <div key={index} className="reflections-card">
              <h5 className="reflection-question">{reflection.reflectques}</h5>
              <p className="write-answer">Write your answer here!</p>
              <div className="reflection-card-body">
                <a href="#" className="view-reflections">View Reflections<img className="next-arrow" src={next} alt="" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
