import React from "react";
import linkedin from "../images/icons/linkedin.svg";
import github from "../images/icons/github.svg";
import codepen from "../images/icons/codepen.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <a
                    href="https://www.linkedin.com/in/joel-coddington/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img src={linkedin} alt="LinkedIn" draggable="false" />
                </a>
                <a
                    href="https://github.com/coddingtonjoel"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img src={github} alt="GitHub" draggable="false" />
                </a>
                <a
                    href="https://codepen.io/coddingtonjoel"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img src={codepen} alt="Codepen" draggable="false" />
                </a>
            </div>
            <div className="footer-copyright">JOEL CODDINGTON ©2020</div>
        </div>
    );
};

export default Footer;
