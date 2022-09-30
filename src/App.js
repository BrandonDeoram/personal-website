import React from 'react';
import './App.css';
import "./styles/Global.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
export default function App() {
  return (
    <div className="App">
      <div id="content">
        <Home></Home>
        <AboutMe></AboutMe>
        <Navbar></Navbar>
        
      </div>
    </div>
  );
}
