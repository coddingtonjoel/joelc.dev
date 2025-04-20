import React from "react";
import linkedin from "../images/icons/linkedin.svg";
import github from "../images/icons/github.svg";
import codepen from "../images/icons/codepen.svg";
import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper className="footer">
            <div className="icons">
                <a
                    href="https://www.linkedin.com/in/joel-coddington-lopez/"
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
            <div className="copyright">
                JOEL CODDINGTON-LOPEZ © {new Date().getFullYear()}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    background-color: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 130px;
    padding: 10px 0;

    .icons {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 100%;
            width: 30px;
            margin: 0 20px;
        }
    }

    .copyright {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        text-align: center;
        font-size: 0.9rem;

        /* // color for both modes */
        color: #b7b7b7;
    }
`;

export default Footer;
