import React, { useState } from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Modal from "./SkillsModal";
import SkillsButton from "./SkillsButton";
import useMediaQuery from "react-responsive";
import AboutStrand from "./Strand/AboutStrand";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { allContentfulAbout } = useStaticQuery(query);
    const { portrait, description } = allContentfulAbout.nodes[0];

    const isAboutFlexCollapsed = useMediaQuery({
        query: "(max-device-width: 700px)",
    });

    const handleSetIsOpen = open => {
        setIsOpen(open);
    };

    return (
        <React.Fragment>
            <Wrapper id="about">
                <div className="description-flex">
                    <Img className="img" fluid={portrait.fluid} />
                    <div className="description-text">
                        <h4>Who am I?</h4>
                        <p>{description.description}</p>
                    </div>
                </div>
                <hr />
                <div className="skills-container">
                    <h4>Skills and Technologies</h4>
                </div>
                <SkillsButton
                    onClick={() => {
                        setIsOpen(true);
                    }}
                />
                <Modal isOpen={isOpen} setIsOpen={handleSetIsOpen} />
                <AboutStrand />
            </Wrapper>
        </React.Fragment>
    );
};

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};
    overflow: hidden !important;
    position: relative;
    padding-bottom: 10px;

    &:before {
        content: "";
        display: block;
        padding-top: 100px; /* header height + empty space */
        margin-top: -100px; /* header height to degrees padding’s space */
    }

    .description-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 75px 15%;

        @media (max-width: 1100px) {
            padding: 75px 10%;
        }

        @media (max-width: 1100px) {
            padding: 75px 6.5%;
        }

        @media (max-width: 700px) {
            flex-direction: column;
            padding: none;
        }
    }

    .img {
        flex: 0 0 270px;
        height: 100%;
        width: 100%;
        box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.29);
        border-radius: 4px;
        z-index: 30;

        @media (max-width: 900px) {
            flex: 0 0 230px;
        }

        @media (max-width: 900px) {
            flex: 0 0 230px;
            width: 230px;
        }

        @media (max-width: 700px) {
            /* negate margin/padding to position anchor link in the right spot */
            transform: translateY(-25px);
        }

        @media (max-width: 400px) {
            flex: 0 0 200px;
            width: 200px;
        }
    }

    .description-text {
        color: ${props => props.theme.primary};
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 0 6%;

        @media (max-width: 900px) {
            padding-right: 0;
        }

        @media (max-width: 700px) {
            padding: 6%;
        }

        h4 {
            font-size: 2.2rem;
            font-family: "Raleway";
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            display: inline-block;
            width: 195px;
            line-height: 1.5;
            border-bottom: 1px solid ${props => props.theme.primary};
            margin-bottom: 30px;

            @media (max-width: 1100px) {
                font-size: 2rem;
                width: 175px;
            }

            @media (max-width: 750px) {
                font-size: 1.8rem;
            }

            @media (max-width: 700px) {
                margin: 0 auto 30px auto;
            }

            @media (max-width: 530px) {
                font-size: 1.6rem;
                width: 150px;
            }
        }

        p {
            font-weight: 300;
            line-height: 1.5;
            font-size: 1.1rem;

            @media (max-width: 1100px) {
                font-size: 1rem;
            }

            @media (max-width: 900px) {
                font-size: 0.9rem;
            }
        }
    }

    hr {
        width: 75vw;
        border: solid 0.1px ${props => props.theme.secondary};
        opacity: 0.7;
        margin: 0 auto;
    }

    .skills-container {
        position: relative;

        h4 {
            color: ${props => props.theme.primary};
            font-size: 2.2rem;
            font-family: "Raleway";
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            display: block;
            width: 490px;
            margin: 50px auto;
            line-height: 1.5;
            border-bottom: 1px solid ${props => props.theme.primary};

            @media (max-width: 1100px) {
                font-size: 2rem;
                width: 450px;
            }

            @media (max-width: 750px) {
                font-size: 1.8rem;
                width: 420px;
            }

            @media (max-width: 530px) {
                font-size: 1.6rem;
                width: 380px;
            }
        }
    }
`;

const query = graphql`
    {
        allContentfulAbout {
            nodes {
                description {
                    description
                }
                portrait {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

export default About;
