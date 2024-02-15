import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="Main">
      <Navigation />
      <Intro />
      <About />
      <Skills />
     
    </div>
  );
}

export default App;
