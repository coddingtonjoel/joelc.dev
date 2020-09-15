import React, { useState, useEffect } from "react";
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
import Drawer from "@material-ui/core/SwipeableDrawer";
import { useMediaQuery } from "react-responsive";
import StyledButton from "./global/Button";
import Button from "@material-ui/core/Button";

const Navbar = props => {
    const [mode, setMode] = useState("Light");
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });

    const handleMode = (event, newMode) => {
        // check to make sure at least one mode is selected
        if (newMode !== null) {
            setMode(newMode);
            props.toggleMode(newMode);
        }
    };

    //check if there's an existing mode in local storage to set the ToggleButton to
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            localStorage.getItem("mode") !== null
        ) {
            const mode = localStorage.getItem("mode");
            setMode(mode);
        }
    }, []);

    const navDrawer = (
        <StyledButton
            onClick={() => {
                setIsOpen(true);
            }}
            className="drawer-trigger">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    fill={props.theme.primary}
                    d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
            </svg>
        </StyledButton>
    );

    return (
        <React.Fragment>
            <Wrapper>
                {isMobile ? navDrawer : null}
                <Link to="/">
                    <img
                        className="logo"
                        src={
                            props.theme.style === "light"
                                ? logoBlack
                                : logoWhite
                        }
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
                    offset={-300}>
                    <Link className="item" to="#home">
                        <img
                            className="icon"
                            src={home}
                            alt=""
                            draggable="false"
                        />
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
                    <ToggleButton className="togglegroup-btn" value="Light">
                        <Sun />
                    </ToggleButton>
                    <ToggleButton className="togglegroup-btn" value="Dark">
                        <Moon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Wrapper>
            <StyledDrawer
                onOpen={() => {
                    setIsOpen(true);
                }}
                anchor={"left"}
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}>
                <Link to="/">
                    <img
                        className="logo"
                        src={
                            props.theme.style === "light"
                                ? logoBlack
                                : logoWhite
                        }
                        alt=""
                        draggable="false"
                    />
                </Link>
                <Button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className="drawer-btn"
                    variant="text">
                    <Link className="link" to="#about">
                        About
                    </Link>
                </Button>
                <Button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className="drawer-btn"
                    variant="text">
                    <Link className="link" to="#projects">
                        Projects
                    </Link>
                </Button>
                <Button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className="drawer-btn"
                    variant="text">
                    <Link className="link" to="#contact">
                        Contact
                    </Link>
                </Button>
            </StyledDrawer>
        </React.Fragment>
    );
};

const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        background-color: ${props => props.theme.background} !important;
    }

    .logo {
        width: 150px;
        padding: 40px 60px;
    }

    .drawer-btn {
        border-radius: 0;
        height: 50px;
        color: ${props => props.theme.primary};
    }

    .link {
        color: ${props => props.theme.primary};
        text-decoration: none;
        font-family: "Lato" !important;
        font-weight: 400 !important;
    }
`;

const Wrapper = styled.div`
    .drawer-trigger {
        height: 35px;
        z-index: 101;
        padding: 0;
        position: fixed;
        top: 16px;
        left: 30px;
    }

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

        @media (max-width: 600px) {
            left: 50%;
            transform: translateX(-50%);
        }
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

        @media (max-width: 1500px) {
            margin: 0 3rem;
        }

        @media (max-width: 1250px) {
            margin: 0 1.5rem;
        }

        @media (max-width: 1050px) {
            width: 5rem;
        }

        @media (max-width: 800px) {
            margin: 0 1rem;
            width: 3.5rem;
        }

        @media (max-width: 700px) {
            margin: 0 1rem;
            width: 2.8rem;
        }

        @media (max-width: 600px) {
            visibility: hidden;
            opacity: 0;
            pointer-events: none;
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

        @media (max-width: 1050px) {
            margin-right: 0;
        }
    }

    .text {
        font-size: 16px;
        line-height: 0;

        @media (max-width: 1050px) {
            font-size: 0;
        }
    }

    .togglegroup {
        position: fixed;
        top: 10px;
        right: 50px;
        z-index: 100;

        @media (max-width: 850px) {
            height: 40px;
            transform: scale(0.92);
            top: 14px;
            right: 30px;
        }

        &-btn {
            display: flex;
            align-items: center;
            justify-content: center;
        }
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
