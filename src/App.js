import React from 'react';
import './App.css';
import "./styles/Global.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import PersonalProjects from './components/PersonalProjects';
import GetInTouch from './components/GetInTouch';
import Resume from './components/Resume';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <div className="App">
        <div id="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <AboutMe></AboutMe>
              <Navbar></Navbar>
              <Experience />
              <PersonalProjects></PersonalProjects>
              <GetInTouch />
            </Route>
            <Route path="/Resume">
              <Resume></Resume>
            </Route>
          </Switch>

        </div>
      </div>
    </Router>

  );
}
