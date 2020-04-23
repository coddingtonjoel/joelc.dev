import React, { Fragment } from "react";
import home from "../images/home.svg";
import about from "../images/about.svg";
import projects from "../images/projects.svg";
import contact from "../images/contact.svg";
import Scrollspy from "react-scrollspy";
import MediaQuery from "react-responsive";

const Navbar = () => {
    return (
        <Fragment>
            <MediaQuery minDeviceWidth={701}>
                <Scrollspy
                    className="nav"
                    items={["home", "about", "projects", "contact"]}
                    currentClassName="nav-active">
                    <a className="nav-item" href="#home">
                        <img className="nav-icon" src={home} alt="" />
                        <p className="nav-text">Home</p>
                    </a>
                    <a className="nav-item" href="#about">
                        <img className="nav-icon" src={about} alt="" />
                        <p className="nav-text">About</p>
                    </a>
                    <a className="nav-item" href="#projects">
                        <img className="nav-icon" src={projects} alt="" />
                        <p className="nav-text">Projects</p>
                    </a>
                    <a className="nav-item" href="#contact">
                        <img className="nav-icon" src={contact} alt="" />
                        <p className="nav-text">Contact</p>
                    </a>
                </Scrollspy>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={700}>
                <Scrollspy
                    className="nav"
                    items={["home-m", "about", "projects", "contact"]}
                    currentClassName="nav-active">
                    <a className="nav-item" href="#home-m">
                        <img className="nav-icon" src={home} alt="" />
                        <p className="nav-text">Home</p>
                    </a>
                    <a className="nav-item" href="#about">
                        <img className="nav-icon" src={about} alt="" />
                        <p className="nav-text">About</p>
                    </a>
                    <a className="nav-item" href="#projects">
                        <img className="nav-icon" src={projects} alt="" />
                        <p className="nav-text">Projects</p>
                    </a>
                    <a className="nav-item" href="#contact">
                        <img className="nav-icon" src={contact} alt="" />
                        <p className="nav-text">Contact</p>
                    </a>
                </Scrollspy>
            </MediaQuery>
        </Fragment>
    );
};

export default Navbar;
