import React from "react";
import { programming, tools } from "./Resources/Skills";

function About() {
  return (
    <section>
      <div className="about">
        <div className="aboutme">
          <h2 className="about-title">
            About <mark className="linear">Me</mark>
          </h2>
          <p className="about-subtitle">
            I'm Frontend Dev based in Mumbai India. Currently pursuing BCA last
            Year
          </p>
          <p className="about-subtitle">
            I enjoy coding a beautiful websites with my prior frontend skills
            JavaScript, React
          </p>
        </div>
        <div className="skills">
          <div className="tags">
            <h2 className="skillsSubtitle"> Programming</h2>
            <div className="tags-cta">
              {programming.map((item) => {
                return (
                  <button key={item.id} className="cta-tag">
                    {item.lang}
                  </button>
                );
              })}
            </div>

            <h2 className="skillsSubtitle">Tools</h2>
            <div className="tags-cta">
              {tools.map((item) => {
                return (
                  <button key={item.id} className="cta-tag">
                    {item.tool}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
