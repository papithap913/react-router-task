import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AllCourses from './pages/AllCourses';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li><Link to="/">All Courses</Link></li>
          <li><Link to="/fullstack">Full Stack Development</Link></li>
          <li><Link to="/datascience">Data Science</Link></li>
          <li><Link to="/cybersecurity">Cyber Security</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
