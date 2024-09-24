import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Achievements from '../Achivements/Achievements'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Certifications from '../Cerifications/Certifications'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <Experience />
      <Certifications />
      <Projects />
      <Achievements />
    </div>
  )
}

export default App
