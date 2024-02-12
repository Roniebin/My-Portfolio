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
        <h1>About me</h1>
        <h3>저는 이런 사람이에요.</h3>
        <div className="about-container">
          <div className="about-foward">
            <div className="about-foward-upstairs">
                <div style={{width:"50%",height:"50%"}}>
                  <img src="/images/증명사진.jpg" ></img>
                </div>
                <div className="privateInformation"style={{width:"50%",height:"50%"}}>
                    <p>
                      이름 : 송성빈
                    </p>
                    <p>
                      생년월일 : 2000.12.28
                    </p>
                    <p>
                      학력 : 동아대학교
                    </p>
                    <p>
                      email : 1923986@donga.ac.kr
                    </p>
                    <p>
                      주분야 : Publishing, Front-end
                    </p>
                </div>

            </div>
        
          
            
          </div>
          <button className="btn about-front">
              Front 
              {/* 클릭시 뒷면에 나만의 키워드 자세하 4개 설명 */}
          </button>
    
        </div>
      </div>

      <div className="skills">

      </div>
    </div>
  );

  
}

export default App;


