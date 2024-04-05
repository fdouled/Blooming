import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Welcome } from './components/Welcome';


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

function HomePage(props) {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

function DashboardPage(props) {
  return (
    <div>
      <NavBar/>
      <section>
        <Welcome/>
      </section>
      <section>
        <Topics/>
        <DashboardModules/>
        <RecArticles/>
      </section>
    </div>
  );
}

function ModulesPage(props) {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

function QuizzesPage(props) {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

function ProfilePage(props) {
  return (
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
