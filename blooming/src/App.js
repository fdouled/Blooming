import logo from './favicon.ico';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { DashboardPage } from './components/DashboardPage';
import { ProfilePage } from './components/ProfilePage';
import { AboutPage } from './components/AboutPage';
import { QuizPage } from './components/QuizPage';
import { Quiz } from './components/Quiz';
import { LearnPage } from './components/LearnPage';
import { ModulePreview } from './components/ModulePreview';
import { ModuleLesson } from './components/ModuleLesson';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="dashboard" element={ <DashboardPage />} />
      <Route path="learn" element={ <LearnPage />} />
      <Route path="quiz" element={ <QuizPage />}></Route>
      <Route path='module-quiz' element={<Quiz />} />
      <Route path="profile" element={ <ProfilePage />} />
      <Route path="about" element={ <AboutPage />} />
      <Route path='module-preview' element={ <ModulePreview/> } />
      <Route path='module-lesson' element={ <ModuleLesson/> } />
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
