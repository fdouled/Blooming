import React from "react";
import { NavBar } from "./NavBar";

// import { Topics } from "./Topics";
// import { Link } from "react-router-dom";

// Create a function to handle the submission of the reflection
export function ReflectionPage() {
    return (
        <div className="reflection-container">
            <NavBar/>
        <h1>Reflection Page</h1>
        <div className="reflection-box">
          <label htmlFor="reflection-input" className="prompt">
            How was your first period experience?
          </label>
            <textarea id="reflection-input" className="reflection-input" placeholder="Type your response here..."></textarea>
        </div>
      </div>
    );
}

