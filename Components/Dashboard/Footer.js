import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-main">
        <div className="footer-main-first">
          <i className="fa fa-life-ring" />
          <h4>Help center</h4>
          <p>Answers to frequently asked questions.</p>
          <a href="#"> Visit help center</a>
        </div>
        <div className="footer-main-first">
          <i className="fa fa-comments" />
          <h4>Community</h4>
          <p>Ask questions and discuss topics with other developers.</p>
          <a href="#"> Visit community</a>
        </div>
        <div className="footer-main-first">
          <i className="fa-sharp fa-solid fa-paper-plane" />
          <h4>Support</h4>
          <p>Get in touch with an OpenAI support specialist.</p>
          <a href="#">Chat with us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
