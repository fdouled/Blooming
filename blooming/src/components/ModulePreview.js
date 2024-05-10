import React from "react";
import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import next from '../img/chevron-right.svg';

export function ModulePreview(props) {
  const location = useLocation();
  const module = location.state;

  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>{module.title}</h1>
        <p>{module.desc}</p>
        <p>This module contains {module.pages.length} parts.</p>
        <p>
          The information contained in this module comes from these websites:
          <ul>
            {module.links.map((resource) => {
              return (
                <li>
                  <a href={resource.url}>{resource.name}</a>
                </li>
              )
            })}
          </ul>
          Visit these resources to learn more about this topic!
        </p>
        <Link to={'/learn'}><button className="second-btn">Go Back</button></Link>
        <Link to={'/module-lesson'} state={module}><button className="button">Start</button></Link>
        <h2>Share Your Thoughts!</h2>
        <p>Talk about your own experiences here! Let's build a community where we can become comfortable talking about these topics!</p>
        <div class="card" style={{width: "18rem", backgroundColor: "#faf6ea", border: "1px solid #e9e2cf"}}>
          <div class="card-body">
            <h5 class="card-title">What’s a tip you have for dealing with period pain?</h5>
            <p class="card-text">Write your answer here!</p>
          </div>
          <div class="card-body">
            <a href="#" class="card-link">View Reflections<img className="next" src={next} alt=""></img></a>
          </div>
        </div>
      </div>
    </div>
  )
}