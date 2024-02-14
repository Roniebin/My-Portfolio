import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import { useState } from "react";
import myinformation from "./data/data.json";
import {faFire,faHandshake,faBatteryFull} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function App() {
 

  return (
    <div className="Main">
      <Navigation />
      <Intro />
      <About />

    
      <div className="skills">
        <div className="skills-container">
            <h1>Skills</h1>
              <div className="skills-frontend">
                
                <div className="fronted-boxes">
                  <p style={{color:"orange"}}>많이 사용해봤어요</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Java Script</p>
                </div>
              
                <div className="fronted-boxes">
                    <p style={{color:"orange"}}>자주 써봤어요</p>
                    <p>React</p>
                    <p>NEXT.js</p>
                    <p>React Query</p>
                    <p>React-toolkit</p>
                    <p>Boot strap</p>
                </div>
                
                <div className="fronted-boxes">
                    <p style={{color:"orange"}}>사용 경험이 있어요</p>
                    <p>Jquery</p>
                    <p>SCSS</p>
    
                </div>
              </div>

            <div style={{display:"flex",width:"70%",height:"100%"}}>
              <div className="skills-backend">
                csd
              </div>
              <div className="skills-version">
                asdasas
              </div>
            </div>

            <div>
              {/* database */}
            </div>
        </div>
      </div>
    </div>
  );
}


export default App;
