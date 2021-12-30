import React from 'react';
import './Contact.css';
import githubLogo from '../images/github.png';
import gmailLogo from '../images/gmail.png';
import instagramLogo from '../images/instagram.png';
import linkedinLogo from '../images/linkedin.png';

const Contact = () => {
  return (
    <form
      className="form-wrapper"
      id="contact"
      name="contact"
      method="POST"
      data-netlify="true"
      subject=""
    >
      <h1>Contact Me</h1>
      <div className="form-container">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
            <br />
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <div className="form-contact">
          <div>
            <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:007daac2-9c92-455b-9465-9c901cbeed03">
              <h1>
                <button>Download Resume</button>
              </h1>
            </a>
          </div>
          <div className="social-media-icons">
            <a
              href="https://github.com/jasmith188"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github-logo" />
            </a>
            <a href="mailto:jasmith.188@gmail.com">
              <img src={gmailLogo} alt="gmail-logo" />
            </a>
            <a
              href="http://instagram.com/jimmysmith812"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramLogo} alt="instagram-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/jamessmith812/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
