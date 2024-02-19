import React from "react";
import "../App.css";


function Archiving(props)
{
    return (
        <div className="archiving">
      <h1 style={{ textAlign: "center",marginTop:"0px",paddingTop:"40px"}}>Archiving</h1>
        <h1></h1>
        <div className="archiving-container">
          
          <div className="archiving-flex">
              <div className="github-logo">
                  <img src="/images/github.png"/>
              </div>
              <div className="github-letter">
                  <p style={{fontSize:"14px"}}>
                    Ronnie's github
                  </p>
                  <p style={{marginBottom:"40px"}}>
                    * 프로젝트를 진행하면서 사용한 레파지토리 입니다.<br/>
                    * 소스 보관 및 기록용
                  </p>
                  <div>
                      git : <a href="https://github.com/Roniebin">https://github.com/Roniebin</a>
                  </div>
              </div>
          </div>
         
        </div>
      </div>
    )
}

export default Archiving;