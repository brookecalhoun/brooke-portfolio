import React from "react";
import QR from "../assets/qr.png";

function Contact() {
  return (
    <span id="contact">
      <div className="contact" id="contact">
        <h2 className="contact-title">Let's get in touch!</h2>
        <div className="contact-list">
          <a href="https://linkedin.com/in/brooke-calhoun" className="linkedin">
            LinkedIn
          </a>
          <a href="https://github.com/brookecalhoun" className="github">
            GitHub
          </a>
          <p className="email">bancalhoun@ymail.com</p>
          <p className="number">602.488.9355</p>
          <a href="https://hihello.me/p/d1926065-47e2-4ad3-958a-847ab7fdf877">
            <img src={QR} className="qr" alt="qr code" />
          </a>
          <br />
          <p className="qr-title">
            scan or press the QR code for my business card!
          </p>
        </div>
      </div>
    </span>
  );
}

export default Contact