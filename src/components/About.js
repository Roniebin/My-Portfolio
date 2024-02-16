import React from "react";
import "../App.css";
import { useState } from "react";
import myinformation from "../data/data.json";
import {faTag,faPen,faFire,faHandshake,faBatteryFull} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function About(props)
{

    let [getinfo, setMyinfo] = useState("");
    getinfo = myinformation.info[0];
  
    let [rotationdeg, setRotationdeg] = useState(0);
  
    let rotated = {
      transform: `rotateY(${rotationdeg}deg) `,
      transition: `transform 0.8s ease-in-out`,
    };

    return (
        <div className="about">
        <h1>About me</h1>
        <h3>저는 이런 사람이에요.</h3>
        <div className="about-container" style={rotated}>
          <div className="about-foward ">
            
            <h2 style={{ color: "black", margin: "0px", marginTop: "20px" }}>
              
              <FontAwesomeIcon icon={faTag} style={{marginRight:"10px"}}/>인적사항
              
            </h2>
            <div className="about-foward-upstairs">
              <div className="privateImg">
                <img src="/images/증명사진.jpg" style={{marginLeft:"10px"}}></img>
              </div>
              <div className="privateInformation">
                <Myinformation getinfo={getinfo} />
              </div>
            </div>

            <button
              className="btn about-btn"
              onClick={() => {
                setRotationdeg((rotationdeg) => rotationdeg + 180);
              }}
            >
              더보기
            </button>
          </div>

          <div className="about-backward">
          <h2><FontAwesomeIcon icon={faTag} style={{marginRight:"10px"}}/> 성격 카드</h2>
              <div className="about-backward-items">
                <div className="items-box">
                <FontAwesomeIcon className="about-icons"icon={faFire} style={{color:"red"}} />
                 <span style={{marginLeft:"10px"}}>언제나 열정적이에요!</span>
                </div>

              </div>
              <div className="about-backward-items">
                <div className="items-box">
                  <FontAwesomeIcon className="about-icons" icon={faHandshake} style={{color:"orange"}}/>
                  <span style={{marginLeft:"10px"}}>사교성이 좋아요!</span>
                </div>
             
              </div>
              <div className="about-backward-items">
                <div className="items-box">
                  <FontAwesomeIcon className="about-icons"icon={faBatteryFull} style={{color:"black"}}/>
                  <span style={{marginLeft:"10px"}}>지치지 않아요!</span>
                </div>
             
              </div>
           

          <button
              className="btn about-btn"
              onClick={() => {
                setRotationdeg((rotationdeg) => rotationdeg + 180);
              }}
            >
              돌아가기
            </button>
          </div>
        </div>
      </div>
    )
}



function Myinformation(props) {
    return (
      <span>
        {Object.entries(props.getinfo).map((item, idx) => {
          return (
            <p key={idx} style={{marginLeft:"20px"}}>
              <FontAwesomeIcon icon={faPen} style={{marginRight:"10px"}}/> {item[0]} : {item[1]}
            </p>
          );
        })}
      </span>
    );
  }


export default About;