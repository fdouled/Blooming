import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="dashboard" element={ <DashboardPage />} />
      <Route path="modules" element={ <ModulesPage />} />
      <Route path="quizzes" element={ <QuizzesPage />} />
      <Route path="profile" element={ <ProfilePage />} />
      <Route path="about" element={ <AboutPage />} />
    </Routes>
  );
}

export default App;
