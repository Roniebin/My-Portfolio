import React from "react";
import "../App.css";


function Skills(props)
{
   
    return (
        <div className="skills">
          <h1>Skills</h1>
        <div className="skills-container">
          <div className="skills-fronted">
            <h3>Frontend skills</h3>
            <p>Advanced</p>
              - html, css,javascript
              

            <p>Intermediate</p>
              - react , redux, ajax , next.js, 
                styled-components

            <p>Try out</p>
              - jquery,SCSS
          </div>
          <div className="skills-others">
            <h3>Backend</h3>


            <h3>Android</h3>
            <h3>Version-control</h3>
            <h3>Database</h3>
          </div>
          
        </div>
      </div>
    )
}


export default Skills;