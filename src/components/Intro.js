import React from "react";
import "../App.css";
import styled, { keyframes } from "styled-components";
import { useState,useEffect } from "react";

import {faChevronDown,faLeaf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Intro(props) {

  let [fade,setFade]=useState('')


  // 페이지 로딩되고 intro글 fade로
  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 50)

   return ()=>{
    setFade('')
   }
  },[])

  return (
    <div className="intro">
      <div className="intro-container">
      <div className={'intro-box start '+fade}>
         
            <h1 className="title">안녕하세요 <FontAwesomeIcon icon={faLeaf} /></h1>
            <h1>
            <span style={{color:"#960b54"}}>"진취적인"</span>{" "}
            웹 개발자 송성빈입니다.
            </h1>
        <br></br>
        <p >
          사람들에게 편리함을 주는 보람과, 빠른 변화에 대한 재미에 웹 개발자의
          진로를 선택하였습니다.
        </p>

        <hr></hr>
        <div className="todown" onClick={()=>{
            window.scrollTo({
              top: 600,
              behavior: 'smooth',
           });
        }}>
        <FontAwesomeIcon icon={faChevronDown} />

        </div>
       
      </div>
      </div>
    </div>
  );
}


export default Intro;
