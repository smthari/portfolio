import React from "react";
import profile from "../Assets/Images/sumit.png";
import Social from "./Social";

function Home() {
  return (
    <section>
      <div className="home">
        <div className="profile">
          <img className="profile_image" src={profile} alt="Home" />
        </div>
        <div className="intro">
          <h2 className="intro-title">
            Hi, I’m <mark className="linear">Sumit</mark>
          </h2>
          <h5 className="intro-subtitle">I’m a Frontend Dev</h5>
          <Social />
        </div>
      </div>
    </section>
  );
}

export default Home;
