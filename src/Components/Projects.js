import React from "react";
import Project1 from "../Assets/Images/Project1.png";
import Project2 from "../Assets/Images/Project2.png";
import Project3 from "../Assets/Images/Project3.png";

import { ImInstagram } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

function Projects() {
  return (
    <section>
      <div className="projects">
        <div className="projectsContainer">
          <h2 className="projectsTitle">
            <mark className="linear">Projects</mark>
          </h2>
          <article className="project">
            <div className="ProjectImg_Wrapper">
              <img className="projectImg" src={Project1} />
            </div>
            <div className="project-info">
              <h1 className="ProjectTitle">
                <mark className="linear">
                  FRONTENDS PROJECTS | Ed-Tech Platform
                </mark>
              </h1>
              <p className="projectDetail">
                Created this platform to share projects with tutorial
              </p>
              <ul className="projectInfo social">
                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://github.com/smthari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub></BsGithub>
                  </a>
                </li>

                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/codingsumit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImInstagram></ImInstagram>
                  </a>
                </li>

                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/codingsumit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillEye></AiFillEye>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="project">
            <div className="ProjectImg_Wrapper">
              <img className="projectImg" src={Project2} />
            </div>
            <div className="project-info">
              <h1 className="ProjectTitle">
                <mark className="linear">CODINGSUMIT | Tech Blog</mark>
              </h1>
              <p className="projectDetail">
                Created this blog to share web dev tutorial tips and tricks
              </p>
              <ul className="projectInfo social">
                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://github.com/smthari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub></BsGithub>
                  </a>
                </li>

                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/codingsumit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImInstagram></ImInstagram>
                  </a>
                </li>

                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/codingsumit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillEye></AiFillEye>
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <article className="project">
            <div className="ProjectImg_Wrapper">
              <img className="projectImg" src={Project3} />
            </div>
            <div className="project-info">
              <h1 className="ProjectTitle">
                <mark className="linear">
                  CELEBRITY INFORMATION | API PROJECT
                </mark>
              </h1>
              <p className="projectDetail">
                Created this project using Ninja API
              </p>
              <ul className="projectInfo social">
                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://github.com/smthari"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub></BsGithub>
                  </a>
                </li>

                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/codingsumit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImInstagram></ImInstagram>
                  </a>
                </li>

                <li className="sociallist">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/codingsumit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillEye></AiFillEye>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
