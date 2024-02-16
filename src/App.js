import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  return (
    <div className="Main">
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Project/>
      <div className=""></div>
    </div>
  );
}

export default App;
