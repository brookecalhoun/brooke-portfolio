import React from "react";
import mail from '../assets/mail.svg'


function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/brookecalhoun">
        {" "}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />{" "}
      </a>{" "}
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="https://www.linkedin.com/in/brooke-calhoun">
        {" "}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />{" "}
      </a> 
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="mailto:bancalhoun@ymail.com"><img src={mail}/></a>
    </div>
  );
}
 export default Footer