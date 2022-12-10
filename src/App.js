import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/common/Navbar";
import HomePage from "./components/home/HomePage";
import ProjectsPage from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Footer from "./components/common/Footer";
import "./sass/style.scss";

function App() {
  return (
    <Router>
      <NavBar />

      <div className='contentWrapper'>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
