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
        <div className="about-background">
          <div className="about-container1">
            <div className="about-imgback"></div>
            <div className="about-img">
            <img src="/images/증명사진.jpg" className="mypic"></img>
            </div>
            <div className="about-information">
                <p>" 앉아서 고민하는 것을 좋아하고 </p>
                <p>무언가 떠올랐을때의 성취감을 좋아합니다."</p>
                <br></br> <br></br>
                <p>" 오랜시간 지속하는 끈기</p>
                <p>
                상대방의 관점에서 생각하는것이 제 장점입니다."
                </p>
                
            </div>
            
          </div>

          <div className="about-container2">
              <Myinformation getinfo={getinfo} />

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

            <div className="about-informbox">
              <p key={idx} style={{marginLeft:"20px"}}>
                <FontAwesomeIcon icon={faPen} style={{marginRight:"10px"}}/> {item[0]} : {item[1]}
              </p>
            </div>
          );
        })}
      </span>
    );
  }


export default About;