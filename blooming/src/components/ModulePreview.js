import React, {useState, useEffect} from "react";
import { NavBar } from "./NavBar";
import { Link, useLocation } from 'react-router-dom';
import next from '../img/chevron-right.svg';
import "../components/modulePreview.css";
import { getDatabase, onValue, ref } from 'firebase/database';

export function ModulePreview(props) {
  const location = useLocation();
  const module = location.state;

  const [reflectionsData, setReflectionsData] = useState([]);
  const db = getDatabase();
  const reflectionsRef = ref(db, 'reflections');

  // Convert the data into an array structure
  useEffect(() => {
    const newReflections = onValue(reflectionsRef, (snapshot) => {
      const allReflectionsObj = snapshot.val();
      const allReflectionsKeys = Object.keys(allReflectionsObj);

      const allReflectionsArray = allReflectionsKeys.map((key) => {
        const singleReflectionsCopy = {...allReflectionsObj[key]};
        singleReflectionsCopy.key = key;
        return singleReflectionsCopy;
      });

      console.log(allReflectionsArray);
      setReflectionsData(allReflectionsArray);
    });

    function cleanup() {
      console.log("Component is being removed");
      console.log("turn out the lights");
      newReflections();
    }

    return cleanup;
  }, []);

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
          {reflectionsData.map((reflection, index) => (
            <div key={index} className="reflections-card">
              {console.log(reflection)}
              <h5 className="reflection-question">{reflection.reflectques}</h5>
              <p className="write-answer">Write your answer here!</p>
              <div className="reflection-card-body">
                <Link to={'/reflection'} state={reflection}>
                  <a href="#" className="view-reflections">View Reflections<img className="next-arrow" src={next} alt="" /></a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
