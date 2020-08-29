import React, { useState } from "react";
import home from "../images/icons/home.svg";
import about from "../images/icons/about.svg";
import projects from "../images/icons/projects.svg";
import contact from "../images/icons/contact.svg";
import logoBlack from "../images/logo-black.svg";
import logoWhite from "../images/logo-white.svg";
import Scrollspy from "react-scrollspy";
import { Link } from "gatsby";
import styled, { withTheme } from "styled-components";
import Sun from "@material-ui/icons/WbSunny";
import Moon from "@material-ui/icons/Brightness3";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const Navbar = props => {
    const [mode, setMode] = useState("Light");

    const handleMode = (event, newMode) => {
        if (newMode !== null) {
            setMode(newMode);
            props.toggleMode(newMode);
        }
    };

    React.useEffect(() => {
        if (
            typeof window !== "undefined" &&
            localStorage.getItem("mode") !== null
        ) {
            const mode = localStorage.getItem("mode");
            setMode(mode);
        }
    }, []);

    return (
        <Wrapper>
            <Link to="/">
                <img
                    className="logo"
                    src={props.theme.style === "light" ? logoBlack : logoWhite}
                    alt=""
                    draggable="false"
                />
            </Link>

            <Scrollspy
                className="nav"
                items={["home", "about", "projects", "contact"]}
                currentClassName={`${
                    props.theme.style === "light"
                        ? "active-light"
                        : "active-dark"
                }`}
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
            <ToggleButtonGroup
                className="togglegroup"
                value={mode}
                exclusive
                onChange={handleMode}>
                <ToggleButton value="Light">
                    <Sun />
                </ToggleButton>
                <ToggleButton value="Dark">
                    <Moon />
                </ToggleButton>
            </ToggleButtonGroup>
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
        font-weight: 400;
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

    .togglegroup {
        position: fixed;
        top: 10px;
        right: 50px;
        z-index: 100;
    }

    .MuiSvgIcon-root {
        fill: ${props => props.theme.primary};
    }

    .MuiToggleButton-root {
        background-color: ${props => props.theme.background};
    }

    .MuiToggleButton-root:hover {
        background-color: ${props => props.theme.modeHover};
    }

    .Mui-selected {
        background-color: ${props => props.theme.modeSelected};
    }
`;

export default withTheme(Navbar);
