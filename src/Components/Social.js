import React from "react";
import { ImInstagram } from "react-icons/im";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
function Social() {
  return (
    <ul className="social">
      <li className="sociallist">
        <a
          className="social-icon"
          href="https://linkedin.com/in/sumit-harijan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin></BsLinkedin>
        </a>
      </li>
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
          href="https://twitter.com/sumit_harijan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter></BsTwitter>
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
    </ul>
  );
}

export default Social;
