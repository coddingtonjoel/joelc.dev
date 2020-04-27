import React from "react";
import linkedin from "../images/linkedin-brands.svg";
import github from "../images/github-brands.svg";
import codepen from "../images/codepen-brands.svg";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="about-head-wrapper">
                <h2 className="about-head heading">Contact</h2>
            </div>
            <div className="contact-body">
                <p>
                    Feel free to email me at{" "}
                    <span className="bold">coddingtonjoel@gmail.com</span>.
                </p>
                <a href={process.env.PUBLIC_URL + "/resume"}>
                    Click here to view my resume!
                </a>
            </div>
            <div className="contact-buttons">
                <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/joel-coddington/">
                    <img src={linkedin} alt="" />
                </a>
                <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://github.com/coddingtonjoel">
                    <img src={github} alt="" />
                </a>
                <a
                    target="blank"
                    rel="noopener noreferrer"
                    href="https://codepen.io/coddingtonjoel">
                    <img src={codepen} alt="" />
                </a>
            </div>
            <p className="contact-copyright">Joel Coddington ©2020</p>
            &nbsp;
        </div>
    );
};

export default Contact;
