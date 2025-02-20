import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-info-upper-container">
          <div>
            {/* <form id="email-form" method="POST">
              <h2>Get in Touch</h2>
              <input type="hidden" name="access_key" value="f7e9715c-a702-491e-9b20-6958de3b46a9">
              <input class="email-input" type="text" name="name" placeholder="Your name" required>
              <input class="email-input" type="email" name="email" placeholder="Your email" required>
              <textarea class="email-message" name="message" placeholder="Your message" required></textarea>
              <button id="email-submit" class="btn-color-1" type="submit">Send</button>
              <div id="result"></div>
          </form> */}
          </div>
          <div>
            <h2>Connect with me on</h2>
            <div style="display: flex; flex-direction: column; align-items: flex-start;">
              <div className="contact-info-container">
                <img
                  src="./assets/linkedin-logo.png"
                  alt="LinkedIn icon"
                  style="height: 20px;"
                  class="contact-icon"
                />
                <p>
                  <a target="_blank" href="https://www.linkedin.com">
                    LinkedIn
                  </a>
                </p>
              </div>
              <div className="contact-info-container">
                <img
                  src="./assets/email-icon.svg"
                  alt="Email icon"
                  style="height: 20px;"
                  class="contact-icon"
                />
                <p>
                  <a href="mailto:xinjun978@gmail.com">xinjun978@gmail.com</a>
                </p>
              </div>
              <div className="contact-info-container">
                {/* <img src="./assets/github-logo.png" alt="GitHub profile" style="height: 20px;" class="github-icon"/> */}
                {/* <img src="./assets/github-logo-white.png" alt="GitHub profile" style="height: 20px;" class="github-icon-dark hide"/> */}
                <p>
                  <a target="_blank" href="https://github.com/xjloh">
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
