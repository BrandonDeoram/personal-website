import React from 'react';
import './App.css';
import "./styles/Global.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import PersonalProjects from './components/PersonalProjects';
export default function App() {
  return (
    <div className="App">
      <div id="content">
        <Home></Home>
        <AboutMe></AboutMe>
        <Navbar></Navbar>
        <Experience />
        <PersonalProjects></PersonalProjects>
      </div>
    </div>
  );
}
