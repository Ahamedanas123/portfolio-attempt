import React from "react";
import { TypeAnimation } from "react-type-animation";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz"></div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">Ahamed Anas Ali A</span>
            </span>
          </div>
          <div className="portfolio-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <TypeAnimation
                  sequence={[
                    "MERN STACK DEVELOPER 😎",
                    1000,
                    "PROBLEM SOLVER 😎",
                    2000,
                    () => {
                      console.log("Sequence completed");
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1rem", display: "inline-block" }}
                />
              </h1>
              <span className="profile-role-tagline">
                Interested to Work as MERN STACK DEVELOPER
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="Ahamed Anas Ali A.pdf" download="Ahamed Anas Ali A.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
