import React, { Fragment } from "react";
import home from "../images/home.svg";
import about from "../images/about.svg";
import projects from "../images/projects.svg";
import contact from "../images/contact.svg";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
    return (
        <Fragment>
            <Scrollspy
                className="nav"
                items={["home", "about", "projects", "contact"]}
                currentClassName="nav-active"
                offset={-200}>
                <AnchorLink className="nav-item" href="#home">
                    <img className="nav-icon" src={home} alt="" />
                    <p className="nav-text">Home</p>
                </AnchorLink>
                <AnchorLink offset="100" className="nav-item" href="#about">
                    <img className="nav-icon" src={about} alt="" />
                    <p className="nav-text">About</p>
                </AnchorLink>
                <AnchorLink offset="30" className="nav-item" href="#projects">
                    <img className="nav-icon" src={projects} alt="" />
                    <p className="nav-text">Projects</p>
                </AnchorLink>
                <AnchorLink offset="30" className="nav-item" href="#contact">
                    <img className="nav-icon" src={contact} alt="" />
                    <p className="nav-text">Contact</p>
                </AnchorLink>
            </Scrollspy>
        </Fragment>
    );
};

export default Navbar;
