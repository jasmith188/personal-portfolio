import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="form-wrapper" id="contact">
      <h1>Contact</h1>
      <div className="form-container">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">Name</label> <br />
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label htmlFor="message">Message</label> <br />
            <textarea id="message" name="message" required></textarea>
          </p>
          <p>
            <input type="submit" value="Submit message" />
          </p>
        </form>
        <div className="form-contact">
          <a href="resume.com">
            <h1>
              <button>Download Resume</button>
            </h1>
          </a>
          <p>LinkedIn logo</p>
          <p>GitHub logo</p>
          <p>Insatgram logo</p>
          <p>Google logo</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
