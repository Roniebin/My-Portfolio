import React from "react";
import "../App.css";


function Skills(props)
{
   
    return (
        <div className="skills">
          <br></br>
            <h1>Skills</h1><br></br>
          <div className="skills-title">
            
              <h3 style={{color:"white"}}>
                
                경쟁력있는 프론트엔드 개발자가 되기위해 꾸준히 정진하겠습니다.
              </h3>
          </div>
        
        <div className="skills-container">
      
          <div className="skills-fronted">
          
            <div className="skills-boxes">
              <h3 style={{color:"#f9c51d"}}>퍼블리싱</h3>
              <h4 style={{color:"#f9c51d"}}>html, css ,javascript</h4>
                <p>
              - 원하는 레이아웃 및 디자인 생성 가능<br/><br/>
              - 동적으로 이벤트 제어 가능<br/><br/>
              - 애니메이션 적용 가능<br/><br/>
              </p>
            </div>
              
              
            <div className="skills-boxes">
              <h3 style={{color:"#f9c51d"}}>라이브러리</h3>
              <h4 style={{color:"#f9c51d",width:"100%"}}>react , redux-tookit, ajax <br/>styled-components</h4>
              <p>
            - react 상태관리 및 컴포넌트 재사용이 가능합니다.<br/><br/>
            - ajax를 통해 얻은 데이터를 redux-toolkit을 사용해 전역 상태관리를 한 경험이 있습니다.<br/><br/>
            - styled-component를 통해 컴포넌트 재사용이 가능합니다.<br/><br/>
              </p>
            </div>
            
            <div className="skills-boxes">
              <h3 style={{color:"#f9c51d"}}>이외에 시도해본것들</h3>
              <h4 style={{color:"#f9c51d"}}>jquery,scss,next.js</h4>
              <p>
              - jquery로 교내 미니프로젝트를 해본경험<br/><br/>
              - scss 로 css 코드를 최적화한 경험<br/><br/>
              - next.js 를 통해 서버관리를 한 경험이 있습니다.<br/><br/>
              </p>
            </div>
           
          </div>
          
          
        </div>
      </div>
    )
}


export default Skills;