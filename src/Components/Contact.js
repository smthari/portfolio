import React, { useState } from "react";
import Social from "./Social";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const HandlerName = (event) => {
    setName(event.target.value);
  };

  const HandlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const Handlermessage = (event) => {
    setMessage(event.target.value);
  };

  /* const HandlerSubmit = (event) => {
    alert(`${name} ${email} ${message}`);
    event.preventDefault();
  }; */

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

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
          <form onSubmit={handleSubmit} data-netlify="true">
            <input
              name="name"
              type="text"
              value={name}
              onChange={HandlerName}
              className="contact-input"
              required
              placeholder="Name"
            />
            <input
              name="email"
              type="email"
              value={email}
              onChange={HandlerEmail}
              required
              className="contact-input"
              placeholder="Email"
            />
            <textarea
              name="Message"
              value={message}
              onChange={Handlermessage}
              required
              className="contact-input"
              placeholder="Message"
            ></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
