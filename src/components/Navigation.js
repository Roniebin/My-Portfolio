import React from 'react';
import "../App.css";


function Navigation (props){
    return (
        <div className="navbar">
          <div className="navbar-items logo"><span onClick={()=>{
             window.scrollTo({
                top: 0,
                behavior: 'smooth',
             });
          }}>Song's portfolio</span></div>
          <div className="navbar-items-blank"></div>
          <div className="navbar-items"><span onClick={()=>{
             window.scrollTo({
                top: 600,
                behavior: 'smooth',
             });
          }}>About</span></div>
          <div className="navbar-items"><span onClick={()=>{
             window.scrollTo({
                top: 1250,
                behavior: 'smooth',
             });
          }}>Skills</span></div>
          <div className="navbar-items"><span onClick={()=>{
             window.scrollTo({
                top: 2030,
                behavior: 'smooth',
             });
          }}>Projects</span></div>
          <div className="navbar-items"><span onClick={()=>{
             window.scrollTo({
                top: 600,
                behavior: 'smooth',
             });
          }}>Archiving</span></div>
       </div>
    )
}

export default Navigation;