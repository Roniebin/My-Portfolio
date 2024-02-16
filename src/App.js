import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="Main">
      <Navigation />
      <Intro />
      <About />
      <Skills />
      <div className="projects">
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <div className="projects-container">
          <div className="projects-contents">
            <h2># Project 1 </h2>
            <br></br>
            <h3>- 개발자 구인 사이트 -</h3>
            <h4>
              * 프로젝트를 하고싶거나, 개발자가 필요한 상황에 지원 및 채용할 수
              있도록 하는 사이트입니다.
            </h4>
            <p>구성원 : 프론트엔드 1명, 백엔드 1명</p>
            <p>사용언어 : html, css, javascript</p>
            <p>
              git : <a href="#"> adsadasds</a>
            </p>

            <p>
              프론트엔드 공부를 시작한 후 첫번째 프로젝트 입니다.
              html,css,javascript만을 이용하여 내가 생각한 레이아웃 디자인,
              동적인 이벤트를 완벽하게 구현해내려고 노력하였습니다.
            </p>
            <hr></hr>

            <h4>& 겪었던 난관들 &</h4>
            <p>
              1. 협업능력 저와 팀원 모두에게 첫 프로젝트였기에,실제 git을 이용한
              협업이 익숙하지 않았습니다. 따라서 저희는 코드공유를 위해 git 과
              github 사용법을 익히고 프로젝트를 시작하게되었습니다.
            </p>

            <p>
              2. 레이아웃 및 개체관리 원하는 레이아웃을 만들기위해 많은 시간을
              쏟았지만, 빈 개념들이 발목을 잡아 많은 실험을 하면서 오랜시간이
              걸렸습니다.<br></br>
              마이페이지를 만들때, 선택자로 개체 자식을 선택할때 DOM 지식이 많이
              부족해 다른개체를 자꾸 선택하며 실험적으로 코드를 짰습니다.
              <br></br>그 과정에서 선택자에대한 공부를 많이 했던것 같습니다.
            </p>

            <p>
              3. 코드 일관성 팀원과 코드를 일관적으로 짜지않아. 제 작업을 한후
              팀원이 코드를 가져가면 ,일관성이 없어서 맞췄으면 좋겠다는 피드백을
              받았습니다. <br></br>
              ex. 버튼에 링크를 달아 다음 url로 이동할때 onClick 이벤트를
              사용할지, a태그를 사용할지 매주 토의를 하면서 일정 기간이후부터
              서서히 괜찮은 형태로 진행하게되었습니다.
            </p>

            <hr></hr>
            <h4>& 느낀점 &</h4>
            <p>
              - 프로젝트를 하면서 구글링하고, 머리싸매고 하는 모든과정이 좋은
              경험이 되었다고 느끼고, 공부를 더 열심히 해야겠다는 생각을
              했습니다.<br></br>- 서버와 데이터에 관한 지식이 부족해, 그쪽
              분야에 거의 관여하지 못했다는것이 아쉽고, 다음 프로젝트에서는
              데이터나 서버에대한 공부를 더해서 많은 기여를 해야겠다고
              생각했습니다.
            </p>
          </div>
          <div>----</div>
          <div className="projects-contents">
            <h2># Project 2 </h2>
            <br></br>
            <h3>운잘알 (운동을 잘알려주는 앱)</h3>
            <h4>
              * 운동을 처음 시작하는 사람들을 위한 가이드 앱
            </h4>
            <p>구성원 : 개인</p>
            <p>사용언어 : kotlin</p>
            <p>개발환경 : 안드로이드 스튜디오</p>
          
            <p>
              제가 운동을 좋아해서, 초급자를 위한 기초운동 6가지와 먹어야하는 일일 칼로리를
              본인 대사량에 맞춰 추천하도록 앱을 만들었습니다.
            </p>
            <hr></hr>

            <h4>& 겪었던 난관들 &</h4>
            <p>
              1. 안드로이드 스튜디오 사용법이 익숙하지않아, 검색을 통해 에뮬레이터를 실행하고 조작하는법을 배웠습니다.
            </p>

            <p>
              2. 데이터 관리를위해 sqllite를 사용했지만, 사용법을 몰라 구글링을 달고 공부했습니다.
              helper을 만들어서 인터페이스 기능을 만들어 사용하는 방법을 익혔습니다.
            </p>

            <hr></hr>
            <h4>& 느낀점 &</h4>
            <p>
             앱이 만들어지는 과정에 호기심이 많았는데, 직접 만들어보니 앱을 볼때 이렇게 만들었겠구나 하는 시각이 
             생겼고, 좋은 아이디어를 통해 좋은 앱을 더 만들어보고 싶습니다.
            </p>
            <hr></hr>
            <h4>& Pictures &</h4>
            <p>
             <img src="/images/appproject.png"></img>
            </p>
          </div>

        </div>
        </div>
     
      <div className=""></div>
    </div>
  );
}

export default App;
