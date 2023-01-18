import React from "react";

import { ImInstagram } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

import { projects } from "./Resources/projects";

function Projects() {
  console.log(projects[1].links);

  return (
    <section>
      <div className="projects">
        <div className="projectsContainer">
          <h2 className="projectsTitle">
            <mark className="linear">Projects</mark>
          </h2>

          {projects.map((projects, index) => {
            const { img, title, subTitle, igUrl, gitUrl, viewUrl } = projects;
            return (
              <div className="project" key={index}>
                <div className="ProjectImg_Wrapper">
                  <img alt="project 1" className="projectImg" src={img} />
                </div>
                <div className="project-info">
                  <h1 className="ProjectTitle">
                    <mark className="linear">{title}</mark>
                  </h1>
                  <p className="projectDetail">{subTitle}</p>
                  <ul className="projectInfo social">
                    {igUrl ? (
                      <li className="sociallist">
                        <a
                          className="social-icon"
                          href={igUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ImInstagram />
                        </a>
                      </li>
                    ) : (
                      " "
                    )}

                    {viewUrl ? (
                      <li className="sociallist">
                        <a
                          className="social-icon"
                          href={viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiFillEye />
                        </a>
                      </li>
                    ) : (
                      " "
                    )}

                    {gitUrl ? (
                      <li className="sociallist">
                        <a
                          className="social-icon"
                          href={gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub></BsGithub>
                        </a>
                      </li>
                    ) : (
                      " "
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
