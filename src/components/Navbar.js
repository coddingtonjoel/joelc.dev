import React from "react";
import home from "../images/icons/home.svg";
import about from "../images/icons/about.svg";
import projects from "../images/icons/projects.svg";
import contact from "../images/icons/contact.svg";
import logoBlack from "../images/logo-black.svg";
import Scrollspy from "react-scrollspy";
import { Link } from "gatsby";
import styled from "styled-components";

const Navbar = props => {
    return (
        <Wrapper>
            <Link to="/">
                <img
                    className="logo"
                    src={logoBlack}
                    alt=""
                    draggable="false"
                />
            </Link>

            <Scrollspy
                className="nav"
                items={["home", "about", "projects", "contact"]}
                // TODO check for light mode / dark mode here
                currentClassName="active-light"
                offset={-150}>
                <Link className="item" to="#home">
                    <img className="icon" src={home} alt="" draggable="false" />
                    <p className="text">Home</p>
                </Link>
                <Link className="item" to="#about">
                    <img
                        className="icon"
                        src={about}
                        alt=""
                        draggable="false"
                    />
                    <p className="text">About</p>
                </Link>
                <Link className="item" to="#projects">
                    <img
                        className="icon"
                        src={projects}
                        alt=""
                        draggable="false"
                    />
                    <p className="text">Projects</p>
                </Link>
                <Link className="item" to="#contact">
                    <img
                        className="icon"
                        src={contact}
                        alt=""
                        draggable="false"
                    />
                    <p className="text">Contact</p>
                </Link>
            </Scrollspy>
            <div className="switch">
                <label>
                    Light
                    <input
                        checked={props.mode}
                        onChange={props.toggleMode}
                        type="checkbox"
                    />
                    <span className="lever"></span>
                    Dark
                </label>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .nav {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: ${props => props.theme.navbarHeight};
        background-color: ${props => props.theme.background};
        box-shadow: ${props => props.theme.boxShadow};
    }

    .logo {
        height: 65px;
        width: 65px;
        position: fixed;
        top: 0;
        left: 20px;
        z-index: 101;
    }

    .item:link,
    .item:visited {
        color: ${props => props.theme.primary};
        text-decoration: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Raleway";
        font-weight: 300;
        font-size: 16px;
        margin: 0 5rem;
        width: 9rem;

        @media (max-width: 470px) {
            margin: 0 3rem;
        }
    }

    .icon {
        width: 20px;
        height: 20px;
        z-index: 20;
        position: relative;
        margin-right: 1.5rem;

        /* // set to dark gray color */
        filter: ${props => props.theme.iconBrightness};

        @media (max-width: 550px) {
            margin-right: 0;
        }
    }

    .text {
        font-size: 16px;
        line-height: 0;

        @media (max-width: 550px) {
            font-size: 0;
        }
    }

    .switch {
        position: fixed;
        top: 23px;
        right: 60px;
        z-index: 101;
    }
`;

export default Navbar;
