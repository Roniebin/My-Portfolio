import React from "react";
import "../App.css";


function Skills(props)
{
   
    return (
        <div className="skills">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-frontend lower ">
            <div className="fronted-boxes">
              <p style={{ marginTop: "60px" }}>
                <img src="/images/front1.png" className="skills-img1"></img>
              </p>
            </div>

            <div className="fronted-boxes ">
              <h3
                style={{
                  color: "orange",
                  marginBottom: "0px",
                  marginTop: "5px",
                }}
              >
                Frontend
              </h3>
              <hr></hr>
              <p>
                <img src="/images/front2.png" className="skills-img2"></img>
              </p>
            </div>

            <div className="fronted-boxes">
              <p style={{ marginTop: "60px" }}>
                <img src="/images/front3.png" className="skills-img3"></img>
              </p>
            </div>
          </div>
          <div
            className="skills-backend-container"
            style={{ display: "flex", margin: "auto", maxWidth: "1050px" }}
          >
            <div className="skills-backend lower skills-backend-bone">
              <div style={{ width: "50%", margin: "auto" }}>
                <h3
                  style={{
                    color: "orange",
                    marginBottom: "10px",
                    marginTop: "15px",
                  }}
                >
                  Backend
                </h3>
                <hr></hr>
              </div>
              <p>
                <img src="/images/backend.png" className="skills-img5"></img>
              </p>
            </div>
            <div className="skills-version lower skills-backend-bone">
              <div style={{ width: "50%", margin: "auto" }}>
                <h3
                  style={{
                    color: "orange",
                    marginBottom: "10px",
                    marginTop: "15px",
                  }}
                >
                  Version-control
                </h3>
                <hr></hr>
              </div>
              <p>
                <img src="/images/front5.png" className="skills-img4"></img>
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              margin: "auto",
              width: "53%",
              height: "100%",
              maxWidth: "1050px",
            }}
          >
            <div className="skills-database lower skills-backend-bone">
              <div style={{ width: "50%", margin: "auto" }}>
                <h3
                  style={{
                    color: "orange",
                    marginBottom: "10px",
                    marginTop: "15px",
                  }}
                >
                  Database
                </h3>
                <hr></hr>
              </div>
              <p>
                <img src="/images/database.png" className="skills-img6"></img>
              </p>
            </div>
            <div className="skills-android lower skills-backend-bone">
              <div style={{ width: "50%", margin: "auto" }}>
                <h3
                  style={{
                    color: "orange",
                    marginBottom: "10px",
                    marginTop: "15px",
                  }}
                >
                  Android
                </h3>
                <hr></hr>
              </div>
              <p>
                <img src="/images/android.png" className="skills-img7"></img>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}


export default Skills;