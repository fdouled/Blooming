import React from "react";
import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

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
        <Link to={'/learn'}><button className="second-btn">Go Back</button></Link>
        <Link to={'/module-lesson'} state={module}><button className="button">Start</button></Link>
        <h2>Share Your Thoughts!</h2>
        <p>Talk about your own experiences here! Let's build a community where we can become comfortable talking about these topics!</p>
      </div>
    </div>
  )
}