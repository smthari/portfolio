import React, { useState } from "react";
import Social from "./Social";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // console.log(process.env.REACT_APP_FORM_SPREE);

  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_SPREE);
  if (state.succeeded) {
    alert("Form Submitted, I'll get back to you shortly");
  }

  const HandlerName = (event) => {
    setName(event.target.value);
  };

  const HandlerEmail = (event) => {
    setEmail(event.target.value);
  };

  const Handlermessage = (event) => {
    setMessage(event.target.value);
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
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              value={name}
              onChange={HandlerName}
              className="contact-input"
              required
              placeholder="Name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              name="email"
              type="email"
              value={email}
              onChange={HandlerEmail}
              required
              className="contact-input"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="Message"
              required
              value={message}
              onChange={Handlermessage}
              className="contact-input"
              placeholder="Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
