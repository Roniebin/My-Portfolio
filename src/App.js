import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Archiving from "./components/Archiving";

function App() {
  return (
    <div className="Main">
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <Project />
      <Archiving/>
      
    </div>
  );
}

export default App;
