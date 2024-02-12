import React from 'react';
import "../App.css";


function Navigation (props){
    return (
        <div className="navbar">
          <div className="navbar-items logo"><span>Song's portfolio</span></div>
          <div className="navbar-items-blank"></div>
          <div className="navbar-items"><span>About</span></div>
          <div className="navbar-items"><span>Skills</span></div>
          <div className="navbar-items"><span>Projects</span></div>
          <div className="navbar-items"><span>Archiving</span></div>
       </div>
    )
}

export default Navigation;