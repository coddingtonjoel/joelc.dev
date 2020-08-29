import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { withTheme } from "styled-components";
import Img from "gatsby-image";
import Strand from "./Strand/Strand";
import Button from "../global/Button";
import { fadeIn } from "../global/Animations";

const Header = props => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query);

    return (
        <Wrapper id="home" className="header">
            <Img className="img" fluid={fluid} draggable={false} />
            <div className="text">
                <h1>HI, I'M JOEL CODDINGTON.</h1>
                <h3>I'M A STUDENT WEB DEVELOPER WHO LOVES UIs.</h3>
                <div className="btn">
                    <Button href="#about">
                        <div className="flex">
                            Learn More
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
            <Strand />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};
    position: relative;
    height: 780px;
    overflow: hidden;

    .img {
        opacity: 0.1;
        position: relative;
        bottom: 26%;
    }

    .text {
        color: ${props => props.theme.primary};
        position: absolute;
        top: 33%;
        left: 10%;

        h1 {
            font-size: 3.2rem;
            margin-bottom: 40px;
            font-family: "Raleway";
            font-weight: 300;
            animation: ${fadeIn} 1s ease backwards 0.3s;
        }

        h3 {
            font-size: 1.9rem;
            margin-bottom: 40px;
            font-family: "Raleway";
            font-weight: 300;
            animation: ${fadeIn} 1s ease backwards 0.6s;
        }

        .btn {
            animation: ${fadeIn} 1s ease backwards 1s;
            transition: 0s;
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
