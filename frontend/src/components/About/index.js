import React from "react";
import "./index.css";
import Alien from "../../images/profilePic.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="aboutContainer">
        <div className="aboutText">
          <h1>
            Hi, I'm Craig
            <br></br>
          </h1>
          <p>
            I am a competent developer with experience implementing both the
            backend and frontend of applications. I understand all aspects of
            the software development lifecycle and I am comfortable working with
            both agile and waterfall methodologies. I am seeking to find a
            position in a company in which I can expand my knowledge and grow my
            skills.
          </p>
        </div>
        <div className="profilepic">
          <br></br>
          <img alt="hero" src={Alien} width={200} height={200}></img>
        </div>
      </div>
    </section>
  );
}
