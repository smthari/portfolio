import React from "react";

function About() {
  return (
    <section>
      <div className="about">
        <div className="aboutme">
          <h2 className="about-title">
            About <mark className="linear">Me</mark>
          </h2>
          <p className="about-subtitle">
            I'm Frontend Dev based in Mumbai India. Currently pursing BCA 1st
            Year
          </p>
          <p className="about-subtitle">
            I enjoy coding a beautiful websites with my prior frontend skills
            JavaScript, React etc..
          </p>
        </div>
        <div className="skills">
          <div className="tags">
            <h2 className="skillsSubtitle"> Programming</h2>
            <div className="tags-cta">
              <button className="cta-tag">HTML</button>
              <button className="cta-tag">CSS</button>
              <button className="cta-tag">JavaScript</button>
              <button className="cta-tag">React</button>
              <button className="cta-tag">Gatsby</button>
              <button className="cta-tag">Bootstrap</button>
            </div>

            <h2 className="skillsSubtitle">Tools</h2>
            <div className="tags-cta">
              <button className="cta-tag">NPM</button>
              <button className="cta-tag">Notion</button>
              <button className="cta-tag">VS Studio</button>
              <button className="cta-tag">Contentful</button>
              <button className="cta-tag">Firebase</button>
              <button className="cta-tag">Git</button>
              <button className="cta-tag">Figma</button>
              <button className="cta-tag">Canva</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
