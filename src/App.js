import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import { useState } from "react";

function App() {
  return (
    <div className="Main">
      <Navigation/>
      <Intro/>

      <div className="about">
        <div>
          <h1>About</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
