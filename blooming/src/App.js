import logo from './favicon.ico';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { DashboardPage } from './components/DashboardPage';
import { ProfilePage } from './components/ProfilePage';
import { AboutPage } from './components/AboutPage';
import { QuizPage } from './components/QuizPage';
import { Quiz } from './components/Quiz';
import { LearnPage } from './components/LearnPage';
import { ModulePreview } from './components/ModulePreview';
import { ModuleLesson } from './components/ModuleLesson';
import { ReflectionPage } from './components/ReflectionPage';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import DEFAULT_USERS from '../data/users.json';


export function App() {
  //state
  // const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //default to null user
  // const navigateTo = useNavigate(); //navigation hook
  // //effect to run when the component first loads
  // useEffect(() => {
  // //log in a default user
  // // loginUser(DEFAULT_USERS[1])
  // }, []) //array is list of variables that will cause this to rerun if changed
  // const loginUser = (userObj) => {
  //   console.log("logging in as", userObj.userName);
  //   setCurrentUser(userObj);
  //   if(userObj.userId !== null){
  //   navigateTo('/chat/general'); //go to chat after login
  //   }
  // }

  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="dashboard" element={ <DashboardPage />} />
      <Route path="learn" element={ <LearnPage />} />
      <Route path="quiz" element={ <QuizPage />}></Route>
      <Route path='module-quiz' element={<Quiz />} />
      <Route path="profile" element={ <ProfilePage />} />
      <Route path="about" element={ <AboutPage />} />
      <Route path='module-preview' element={ <ModulePreview/> } />
      <Route path='module-lesson' element={ <ModuleLesson/> } />
      <Route path="reflection" element={ <ReflectionPage />} />
    </Routes>
  );
}

function HomePage(props) {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
