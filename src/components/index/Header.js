import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { withTheme } from "styled-components";
import Button from "../global/Button";
import { fadeIn } from "../global/Animations";
import BackgroundImage from "gatsby-background-image";

const Header = props => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query);

    return (
        <Wrapper id="home">
            <BackgroundImage
                className="bg-img"
                Tag="div"
                fluid={fluid}
                alt="Laptop with code on screen">
                <div className="text">
                    <h1>HI, I'M JOEL CODDINGTON.</h1>
                    <h3>
                        I'M A STUDENT WEB DEVELOPER WHO LOVES UI DEVELOPMENT.
                    </h3>
                    <div className="btn">
                        <Button
                            className="btn-component"
                            variant="text"
                            href="#about">
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
            </BackgroundImage>
        </Wrapper>
    );
};

const headerAnimationDelay = 0.5;

const Wrapper = styled.header`
    background-color: ${props => props.theme.background} !important;

    &:before {
        content: "";
        display: block;
        padding-top: ${props =>
            props.theme.navbarHeight}; /* header height + empty space */
        margin-top: -${props => props.theme.navbarHeight}; /* header height to degrees padding’s space */
    }

    .bg-img {
        position: relative;
        height: 600px;
        overflow: hidden;
        background-position: fixed;

        &::before,
        &::after {
            opacity: 0.08 !important;
        }

        @media (max-width: 1000px) {
            height: 450px;
        }

        @media (max-width: 600px) {
            height: 400px;
        }
    }

    .text {
        color: ${props => props.theme.primary};
        position: absolute;
        top: 33%;
        left: 10%;

        left: 50%;
        transform: translateX(-50%);
        width: 92%;
        text-align: center;
        top: 30%;

        @media (max-width: 1000px) {
            left: 50%;
            transform: translateX(-50%);
            width: 92%;
            text-align: center;
            top: 25%;
        }

        h1 {
            font-size: 3.2rem;
            margin-bottom: 40px;
            font-family: "Raleway";
            font-weight: 300;
            animation: ${fadeIn} 1s ease backwards
                ${headerAnimationDelay + 0.3}s;

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
            font-family: "Raleway";
            font-weight: 300;
            animation: ${fadeIn} 1s ease backwards
                ${headerAnimationDelay + 0.55}s;

            @media (max-width: 1100px) {
                font-size: 1.6rem;
            }

            @media (max-width: 750px) {
                font-size: 1.2rem;
            }

            @media (max-width: 530px) {
                font-size: 1rem;
            }
        }

        .btn {
            animation: ${fadeIn} 1s ease backwards
                ${headerAnimationDelay + 0.8}s;
            transition: 0s;

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

const query = graphql`
    {
        file(relativePath: { eq: "header-background.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default withTheme(Header);
