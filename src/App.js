import React from "react";
import './App.css';
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="Main">
       <Navigation></Navigation>
       <div className="intro">
            <div className="intro-box">
             
            <img src="./img/증명사진.jpg"></img>
            <h2>안녕하세요.</h2>
            <h2>프론트엔드 웹 개발자 송성빈입니다.</h2>
            <p>
              사람들에게 편리함을 주는 보람과, 빠른 변화에 대한 재미에 웹 개발자의 진로를 선택하였습니다. 
            </p>
            </div>

            
       </div>
     
       <div className="about">
          <div></div>
          <div>

          </div>
       </div>
       
    </div>
  );
}

export default App;
