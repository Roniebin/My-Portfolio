import React from "react";
import "../App.css";
import styled, { keyframes } from "styled-components";
import { useState,useEffect } from "react";



function Intro(props) {

  let [fade,setFade]=useState('')

  // 페이지 로딩되고 intro글 fade로
  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)

   return ()=>{
    setFade('')
   }
  },[])

  return (
    <div className="intro">
      <div className={'intro-box start '+fade}>
            <h1>안녕하세요.</h1>
            <h1>
            <span style={{color:"red"}}>"진취적인"</span>{" "}
            웹 개발자 송성빈입니다.
            </h1>
        <br></br>
        <p>
          사람들에게 편리함을 주는 보람과, 빠른 변화에 대한 재미에 웹 개발자의
          진로를 선택하였습니다.
        </p>

        <hr></hr>
        <button className="btn">더 알아보기</button>
      </div>
    </div>
  );
}


export default Intro;
