import React, { useEffect, useRef } from "react";
import styled, { withTheme } from "styled-components";
import Button from "../global/Button";
import { gsap } from "gsap";
import scrollTo from "gatsby-plugin-smoothscroll";
import HeaderSVG from "./HeaderSVG";

const Header = props => {
    const objRef = useRef([]);
    objRef.current = [];

    useEffect(() => {
        objRef.current.forEach((obj, index) => {
            gsap.fromTo(
                obj,
                { y: 0, visibility: "hidden", opacity: 0 },
                {
                    duration: 1,
                    y: -40,
                    opacity: 1,
                    visibility: "visible",
                    delay: index * 0.3 + 2.5,
                }
            );
        });
    }, []);

    const addToRefs = el => {
        if (el && !objRef.current.includes(el)) {
            objRef.current.push(el);
        }
    };

    return (
        <Wrapper id="home">
            <HeaderSVG />
            <div className="text">
                <h1 ref={addToRefs}>HI, I'M JOEL CODDINGTON.</h1>
                <h3 ref={addToRefs}>
                    I'M A SOFTWARE ENGINEER WHO LOVES UI DEVELOPMENT.
                </h3>
                <div className="btn" ref={addToRefs}>
                    <Button
                        className="btn-component"
                        variant="text"
                        onClick={() => {
                            scrollTo("#about");
                        }}>
                        <div className="flex">
                            Learn More
                            {/* down arrow svg */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    fill={props.theme.primary}
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                />
                            </svg>
                        </div>
                    </Button>
                </div>
            </div>
            {/* Disabled for smoothness :( */}
            {/* <Strand /> */}
        </Wrapper>
    );
};

const Wrapper = styled.header`
    transform: translate3d(0, 0, 0);
    background-color: ${props => props.theme.background} !important;

    &:before {
        content: "";
        display: block;
        padding-top: ${props =>
            props.theme.navbarHeight}; /* header height + empty space */
        margin-top: -${props => props.theme.navbarHeight}; /* header height to degrees padding’s space */
    }

    .text {
        color: ${props => props.theme.primary};
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translate3d(0, 0, 0);
        width: 92%;
        text-align: center;
        top: 40%;
        visibility: hidden;

        @media (max-width: 1000px) {
            left: 50%;
            transform: translateX(-50%);
            width: 92%;
            text-align: center;
        }

        @media (max-width: 600px) {
            top: 36.5%;
        }

        h1 {
            font-size: 3.2rem;
            margin-bottom: 40px;
            font-family: "Raleway", sans-serif;
            font-weight: 700;

            @media (max-width: 1100px) {
                font-size: 3rem;
            }

            @media (max-width: 750px) {
                font-size: 2.6rem;
            }

            @media (max-width: 660px) {
                font-size: 2.2rem;
            }

            @media (max-width: 530px) {
                font-size: 2rem;
            }

            @media (max-width: 470px) {
                font-size: 1.8rem;
            }
        }

        h3 {
            font-size: 1.9rem;
            margin-bottom: 40px;
            font-family: "Raleway", sans-serif;
            font-weight: 400;

            @media (max-width: 1100px) {
                font-size: 1.6rem;
            }

            @media (max-width: 750px) {
                font-size: 1.2rem;
            }

            @media (max-width: 600px) {
                font-weight: 700;
            }

            @media (max-width: 530px) {
                font-size: 1rem;
            }
        }

        .btn {
            transition: 0s;
            transform: translate3d(0, 0, 0);

            @media (max-width: 700px) {
                font-size: 0.85rem;
            }

            .btn-component {
                padding: 7px 29px;
                transition: none;
            }
        }

        .flex {
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                margin-left: 10px;
                margin-right: -10px;
            }
        }
    }
`;

export default withTheme(Header);
