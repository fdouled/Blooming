import logo from './favicon.ico';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { DashboardPage } from './components/DashboardPage';
import { ProfilePage } from './components/ProfilePage';
import { AboutPage } from './components/AboutPage';
import { QuizPage } from './components/QuizPage';
import { Quiz } from './components/Quiz';
import "bootstrap/dist/css/bootstrap.min.css";


export function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="dashboard" element={ <DashboardPage />} />
      <Route path="learn" element={ <LearnPage />} />
      <Route path="quiz" element={ <QuizPage />}>
        <Route path='module-quiz' element={<Quiz />} />
      </Route>
      <Route path="profile" element={ <ProfilePage />} />
      <Route path="about" element={ <AboutPage />} />
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

function LearnPage(props) {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
