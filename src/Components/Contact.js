import React from "react";
import Social from "./Social";

function Contact() {
  return (
    <section>
      <div className="contact">
        <div className="contactContent">
          <h2 className="contact-title">
            <mark className="linear">Contact me</mark>
          </h2>

          <p className="contact-paragraph"> I'll get back to you shortly ! </p>
          <br />
          <p className="contact-paragraph">
            In case you want to connect you can check below where you can find
            me or if you prefer just drop me an
            <a
              href="mailto:smtharijan@email.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </p>
          <Social />
        </div>
        <div className="contactForm">
          <form method="POST" name="contact" netlify>
            <input
              name="name"
              type="text"
              className="contact-input"
              required
              placeholder="Name"
            />
            <input
              name="email"
              type="text"
              required
              className="contact-input"
              placeholder="Email"
            />
            <textarea
              name="Message"
              required
              className="contact-input"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
