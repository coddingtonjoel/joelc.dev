import React, { Fragment } from "react";
import home from "../images/icons/home.svg";
import about from "../images/icons/about.svg";
import projects from "../images/icons/projects.svg";
import contact from "../images/icons/contact.svg";
import logoBlack from "../images/logo-black.svg";
import Scrollspy from "react-scrollspy";
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <Fragment>
            <img
                className="nav-logo"
                src={logoBlack}
                alt=""
                draggable="false"
            />
            <Scrollspy
                className="nav"
                items={["home", "about", "projects", "contact"]}
                currentClassName="nav-active"
                offset={-150}>
                <Link className="nav-item" to="#home">
                    <img
                        className="nav-icon"
                        src={home}
                        alt=""
                        draggable="false"
                    />
                    <p className="nav-text">Home</p>
                </Link>
                <Link className="nav-item" to="#about">
                    <img
                        className="nav-icon"
                        src={about}
                        alt=""
                        draggable="false"
                    />
                    <p className="nav-text">About</p>
                </Link>
                <Link className="nav-item" to="#projects">
                    <img
                        className="nav-icon"
                        src={projects}
                        alt=""
                        draggable="false"
                    />
                    <p className="nav-text">Projects</p>
                </Link>
                <Link className="nav-item" to="#contact">
                    <img
                        className="nav-icon"
                        src={contact}
                        alt=""
                        draggable="false"
                    />
                    <p className="nav-text">Contact</p>
                </Link>
            </Scrollspy>
        </Fragment>
    );
};

export default Navbar;
